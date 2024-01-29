import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = path === "/signin" || path === "/signup" || path === "/";
  
   const token = request.cookies.get("token") ?.value || ""


    
    if (isPublic && token) {
        return NextResponse.redirect(new URL ('/dashboard/profile',request.nextUrl));
    }

    if (!isPublic && !token) {
        return NextResponse.redirect(new URL ('/signin',request.nextUrl));
    }
    
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/dashboard","/dashboard/profile", "/signin", "/signup",],
};
