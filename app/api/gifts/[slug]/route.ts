import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { transformGift, type GiftFromDb } from '@/lib/types';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const gift = await prisma.gift.findUnique({
      where: { slug },
    });

    if (!gift) {
      return NextResponse.json(
        { success: false, error: 'Gift not found' },
        { status: 404 }
      );
    }

    const transformedGift = transformGift(gift as unknown as GiftFromDb);

    return NextResponse.json({
      success: true,
      data: transformedGift,
    });
  } catch (error) {
    console.error('Error fetching gift:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch gift' },
      { status: 500 }
    );
  }
}
