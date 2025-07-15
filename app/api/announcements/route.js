import { NextResponse } from 'next/server';
import { query } from '@/app/lib/db';

// Get all announcements
export async function GET(request) {
  try {
    // Extract limit from URL query parameters
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    
    let sql = 'SELECT * FROM announcements ORDER BY start_date DESC ,updated_at DESC';
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
    const { title, link, is_new = true ,start_date, end_date} = await request.json();

    // Validate required fields
    if (!title || !start_date || !end_date) {
      return NextResponse.json(
        { message: 'Title and Dates are required' },
        { status: 400 }
      );
    }

    // Insert announcement into database
    const result = await query({
      query: `
        INSERT INTO announcements (title, link, start_date,end_date, is_new)
        VALUES (?, ?, ?, ?,?)
      `,
      values: [title, link, start_date,end_date, is_new],
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