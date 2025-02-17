import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL("/", request.url));
}

export const config = {
  matcher: "/profile",
};

// if(request.nextUrl.pathname === "/profile") second path
