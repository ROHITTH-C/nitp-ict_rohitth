import { NextResponse } from 'next/server';
import { query } from '@/app/lib/db';

// Get all announcements
export async function GET() {
  try {
    const announcements = await query({
      query: 'SELECT * FROM announcements ORDER BY created_at DESC',
    });

    return NextResponse.json({ announcements }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching announcements', error: error.message },
      { status: 500 }
    );
  }
}

// Create a new announcement
export async function POST(request) {
  try {
    const { title, link, date, is_new = true } = await request.json();

    // Validate required fields
    if (!title || !date) {
      return NextResponse.json(
        { message: 'Title and date are required' },
        { status: 400 }
      );
    }

    // Insert announcement into database
    const result = await query({
      query: `
        INSERT INTO announcements (title, link, date, is_new)
        VALUES (?, ?, ?, ?)
      `,
      values: [title, link, date, is_new],
    });

    return NextResponse.json(
      { 
        message: 'Announcement created successfully',
        announcementId: result.insertId
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating announcement', error: error.message },
      { status: 500 }
    );
  }
} 