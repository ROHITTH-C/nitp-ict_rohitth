import { query } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const { title, url } = await req.json();

    if (!title || !url) {
      return NextResponse.json({ message: 'Title and URL are required' }, { status: 400 });
    }

    const result = await query({
      query: 'UPDATE gallery SET title = ?, url = ? WHERE id = ?',
      values: [title, url, id],
    });

    return NextResponse.json({ success: true, affectedRows: result.affectedRows });
  } catch (err) {
    console.error('Update error:', err);
    return NextResponse.json({ message: 'Failed to update gallery entry' }, { status: 500 });
  }
}
