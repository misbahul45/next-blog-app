import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token=await getToken({ req });
    if (token) {
      if(req.nextUrl.pathname.includes("sign")){
        return NextResponse.redirect(new URL("/posts", req.url).toString());
      }
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/sign-in", req.url).toString());
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token;
      },
    },
  }
);

export const config = { 
  matcher: ["/posts","/sign-in","/sign-up"],
};
