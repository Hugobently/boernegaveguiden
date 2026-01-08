import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { transformGift, type GiftFromDb } from '@/lib/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const limit = Math.min(parseInt(searchParams.get('limit') || '10', 10), 50);

    if (!query || query.length < 2) {
      return NextResponse.json({
        success: true,
        data: [],
        pagination: { total: 0, limit, offset: 0, hasMore: false },
      });
    }

    // Search gifts
    const gifts = await prisma.gift.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { shortDescription: { contains: query, mode: 'insensitive' } },
          { brand: { contains: query, mode: 'insensitive' } },
          { tags: { contains: query, mode: 'insensitive' } },
          { category: { contains: query, mode: 'insensitive' } },
        ],
      },
      orderBy: [
        { editorChoice: 'desc' },
        { featured: 'desc' },
        { rating: 'desc' },
      ],
      take: limit,
    });

    // Track search query for analytics
    try {
      await prisma.searchQuery.upsert({
        where: { query: query.toLowerCase() },
        update: { count: { increment: 1 }, updatedAt: new Date() },
        create: { query: query.toLowerCase(), count: 1 },
      });
    } catch {
      // Ignore analytics errors
    }

    const transformedGifts = gifts.map((gift) =>
      transformGift(gift as unknown as GiftFromDb)
    );

    return NextResponse.json({
      success: true,
      data: transformedGifts,
      pagination: {
        total: gifts.length,
        limit,
        offset: 0,
        hasMore: false,
      },
    });
  } catch (error) {
    console.error('Error searching gifts:', error);
    return NextResponse.json(
      { success: false, error: 'Search failed' },
      { status: 500 }
    );
  }
}
