import { query } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const result = await query({
      query: 'SELECT * FROM gallery WHERE id = ?',
      values: [id],
    });

    if (result.length === 0) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (err) {
    console.error('Fetch error:', err);
    return NextResponse.json({ message: 'Failed to fetch gallery item' }, { status: 500 });
  }
}
