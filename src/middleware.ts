import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hour = Number(request.cookies.get("hour")?.value);
  const isNightTime = hour >= 18 || hour < 6;

  const response = NextResponse.next();
  response.headers.set("x-theme", isNightTime ? "dark" : "light");
  return response;
}

export const config = {
  matcher: ["/", "/((?!_next|favicon.ico).*)"],
};
