import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  // Get the path of the request
  const path = request.nextUrl.pathname;
  
  // Only apply middleware to admin routes
  if (path.startsWith('/admin')) {
    // Skip middleware for login page
    if (path === '/admin/login') {
      return NextResponse.next();
    }

    // Get the token from cookies
    const token = request.cookies.get('admin-token')?.value;

    // If no token exists, redirect to login page
    if (!token) {
      const url = new URL('/admin/login', request.url);
      url.searchParams.set('from', path);
      return NextResponse.redirect(url);
    }

    // Verify the token
    try {
      // Get secret key from environment variable or use default for development
      const secretKey = new TextEncoder().encode(
        process.env.JWT_SECRET || 'your-jwt-secret-key-here'
      );
      
      await jwtVerify(token, secretKey);
      return NextResponse.next();
    } catch (error) {
      // Token is invalid, redirect to login
      const url = new URL('/admin/login', request.url);
      url.searchParams.set('from', path);
      return NextResponse.redirect(url);
    }
  }

  // For non-admin routes, continue without any action
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*'],
} 