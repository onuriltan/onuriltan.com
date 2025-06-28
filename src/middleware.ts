import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookieHour = request.cookies.get("hour")?.value;
  const urlHour = request.nextUrl.searchParams.get("h");

  const hourValue = cookieHour || urlHour;
  const hour = hourValue ? Number(hourValue) : null;

  const isDark = hour === null ? true : hour >= 18 || hour < 6;

  const response = NextResponse.next();
  response.headers.set("x-theme", isDark ? "dark" : "light");

  return response;
}

export const config = {
  matcher: ["/", "/work", "/blog", "/blog/:path*"],
};
