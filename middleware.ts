import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

async function middleware(req:any) {
    try {
        const token = await getToken({ req });

        if (token) {
            // User is authenticated
            if (req.nextUrl.pathname === '/sign-in' || req.nextUrl.pathname === '/sign-up') {
                return NextResponse.redirect(new URL('/posts', req.url).toString());
            } else {
                return NextResponse.next();
            }
        }
        return NextResponse.redirect(new URL('/sign-in', req.url).toString());
    } catch (error) {
        console.error('Error in authentication middleware:', error);
        return NextResponse.error();
    }
}

export default withAuth(middleware, {
    callbacks: {
        authorized: ({ token }) => {
            return !!token; // Ensure token exists and is valid
        },
    },
});

export const config = {
    matcher: ['/posts', '/sign-in', '/sign-up'],
};
