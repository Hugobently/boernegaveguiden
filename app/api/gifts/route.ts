import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { transformGift, type GiftFromDb } from '@/lib/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Parse query parameters
    const ageGroup = searchParams.get('ageGroup');
    const category = searchParams.get('category');
    const priceClass = searchParams.get('priceClass');
    const targetGender = searchParams.get('targetGender');
    const featured = searchParams.get('featured');
    const editorChoice = searchParams.get('editorChoice');
    const isConfirmationGift = searchParams.get('isConfirmationGift');
    const isSustainable = searchParams.get('isSustainable');
    const isDanishBrand = searchParams.get('isDanishBrand');
    const search = searchParams.get('search');
    const sort = searchParams.get('sort') || 'rating';
    const order = searchParams.get('order') || 'desc';
    const limit = Math.min(parseInt(searchParams.get('limit') || '20', 10), 100);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    // Build where clause
    const where: Record<string, unknown> = {};

    if (ageGroup) {
      where.ageGroup = ageGroup;
    }

    if (category) {
      where.category = category;
    }

    if (priceClass) {
      where.priceClass = priceClass;
    }

    if (targetGender && targetGender !== 'alle') {
      where.targetGender = { in: [targetGender, 'alle'] };
    }

    if (featured === 'true') {
      where.featured = true;
    }

    if (editorChoice === 'true') {
      where.editorChoice = true;
    }

    if (isConfirmationGift === 'true') {
      where.isConfirmationGift = true;
    }

    if (isSustainable === 'true') {
      where.isSustainable = true;
    }

    if (isDanishBrand === 'true') {
      where.isDanishBrand = true;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { brand: { contains: search, mode: 'insensitive' } },
        { tags: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Build orderBy
    const validSortFields = ['rating', 'price', 'title', 'createdAt'];
    const sortField = validSortFields.includes(sort) ? sort : 'rating';
    const orderBy = { [sortField]: order === 'asc' ? 'asc' : 'desc' };

    // Execute queries in parallel
    const [gifts, total] = await Promise.all([
      prisma.gift.findMany({
        where,
        orderBy,
        skip: offset,
        take: limit,
      }),
      prisma.gift.count({ where }),
    ]);

    // Transform gifts to typed format
    const transformedGifts = gifts.map((gift) =>
      transformGift(gift as unknown as GiftFromDb)
    );

    return NextResponse.json({
      success: true,
      data: transformedGifts,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + gifts.length < total,
      },
    });
  } catch (error) {
    console.error('Error fetching gifts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch gifts' },
      { status: 500 }
    );
  }
}
