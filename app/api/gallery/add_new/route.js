import { query } from "@/app/lib/db";
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { title, url } = await req.json();

    if (!title || !url) {
      return NextResponse.json({ message: 'Title and URL are required' }, { status: 400 });
    }

    const result = await query({
      query: 'INSERT INTO gallery (title, url) VALUES (?, ?)',
      values: [title, url],
    });

    return NextResponse.json({ success: true, id: result.insertId });
  } catch (err) {
    console.error('Gallery insert error:', err);
    return NextResponse.json({ message: 'Failed to save gallery entry' }, { status: 500 });
  }
}
