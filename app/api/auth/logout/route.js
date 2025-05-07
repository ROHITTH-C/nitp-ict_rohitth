import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Create response that deletes the token cookie
    const response = NextResponse.json(
      { message: 'Logged out successfully' },
      { status: 200 }
    );

    // Clear the auth cookie
    response.cookies.set({
      name: 'admin-token',
      value: '',
      httpOnly: true,
      expires: new Date(0), // Expires immediately
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { message: 'Error during logout' },
      { status: 500 }
    );
  }
} 