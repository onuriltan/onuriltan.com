import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hourValue = request.cookies.get("hour")?.value;
  const hour = hourValue ? Number(hourValue) : null;

  const isDark = !hour ? true : (hour !== null && hour >= 18) || hour < 6;

  const response = NextResponse.next();
  response.headers.set("x-theme", isDark ? "dark" : "light");
  return response;
}

export const config = {
  matcher: ["/", "/((?!_next|favicon.ico).*)"],
};
