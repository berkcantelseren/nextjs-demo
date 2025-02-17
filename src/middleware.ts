import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("example-header", "example-value");

  return response;
  //  return NextResponse.rewrite(new URL("/", request.url));
}

export const config = {
  matcher: "/profile",
};

// if(request.nextUrl.pathname === "/profile") second path
