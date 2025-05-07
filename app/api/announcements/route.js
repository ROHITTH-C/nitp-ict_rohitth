import { NextResponse } from 'next/server';
import { query } from '@/app/lib/db';

// Get all announcements
export async function GET(request) {
  try {
    // Extract limit from URL query parameters
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    
    let sql = 'SELECT * FROM announcements ORDER BY date DESC';
    let queryParams = [];
    
    // Add limit if specified
    if (limit && !isNaN(parseInt(limit))) {
      sql += ' LIMIT ?';
      queryParams.push(parseInt(limit));
    }
    
    const announcements = await query({
      query: sql,
      values: queryParams,
    });
    
    return NextResponse.json(announcements);
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return NextResponse.json(
      { error: 'Failed to fetch announcements' },
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