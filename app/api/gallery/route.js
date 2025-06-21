import { NextResponse } from 'next/server';
import { query } from '@/app/lib/db';

export async function GET(request) {
  try {

    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');

    let sql = 'SELECT * FROM gallery ORDER BY created_at DESC';
    let queryParams = [];

    if (limit && !isNaN(parseInt(limit))) {
      sql += ' LIMIT ?';
      queryParams.push(parseInt(limit));
    }

    const galleryItems = await query({
      query: sql,
      values: queryParams,
    });

    return NextResponse.json(galleryItems);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery items' },
      { status: 500 }
    );
  }
}
