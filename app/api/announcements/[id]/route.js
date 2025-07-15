import { NextResponse } from 'next/server';
import { query } from '@/app/lib/db';

// Get a specific announcement
export async function GET(request, { params }) {
  try {
    // Ensure params is awaited properly
    const id = params?.id;
    
    if (!id) {
      return NextResponse.json(
        { message: 'Announcement ID is required' },
        { status: 400 }
      );
    }
    
    const announcements = await query({
      query: 'SELECT * FROM announcements WHERE id = ?',
      values: [id],
    });

    if (!announcements.length) {
      return NextResponse.json(
        { message: 'Announcement not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ announcement: announcements[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching announcement', error: error.message },
      { status: 500 }
    );
  }
}

// Update an announcement
export async function PUT(request, { params }) {
  try {
    // Ensure params is awaited properly
    const id = params?.id;
    
    if (!id) {
      return NextResponse.json(
        { message: 'Announcement ID is required' },
        { status: 400 }
      );
    }
    
    const { title, link, start_date,end_date, is_new } = await request.json();

    // Validate required fields
    if (!title || !start_date || !end_date) {
      return NextResponse.json(
        { message: 'Title and date are required' },
        { status: 400 }
      );
    }

    // Check if announcement exists
    const existingAnnouncements = await query({
      query: 'SELECT * FROM announcements WHERE id = ?',
      values: [id],
    });

    if (!existingAnnouncements.length) {
      return NextResponse.json(
        { message: 'Announcement not found' },
        { status: 404 }
      );
    }

    // Update announcement
    await query({
      query: `
        UPDATE announcements 
        SET title = ?, link = ?, start_date = ?,end_date = ? , is_new = ?
        WHERE id = ?
      `,
      values: [title, link, start_date,end_date, is_new, id],
    });

    return NextResponse.json(
      { message: 'Announcement updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating announcement:', error);
    return NextResponse.json(
      { message: 'Error updating announcement', error: error.message },
      { status: 500 }
    );
  }
}

// Delete an announcement
export async function DELETE(request, { params }) {
  try {
    // Ensure params is awaited properly
    const id = params?.id;
    
    if (!id) {
      return NextResponse.json(
        { message: 'Announcement ID is required' },
        { status: 400 }
      );
    }

    // Check if announcement exists
    const existingAnnouncements = await query({
      query: 'SELECT * FROM announcements WHERE id = ?',
      values: [id],
    });

    if (!existingAnnouncements.length) {
      return NextResponse.json(
        { message: 'Announcement not found' },
        { status: 404 }
      );
    }

    // Delete announcement
    await query({
      query: 'DELETE FROM announcements WHERE id = ?',
      values: [id],
    });

    return NextResponse.json(
      { message: 'Announcement deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error deleting announcement', error: error.message },
      { status: 500 }
    );
  }
} 