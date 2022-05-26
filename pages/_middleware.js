import { NextResponse, NextRequest } from "next/server";

const signedinPages = ["/dashboard/admin", "/dashboard/issuer", '/dashboard/investor'];
// const signedinPages = ['/df'];

export default function middleware(NextRequest) {
  const url = NextRequest.nextUrl.clone();
  url.pathname = "/login";
  if (signedinPages.find((p) => p === NextRequest.nextUrl.pathname)) {
    const token = NextRequest.cookies.PROPERTY_HANDLE_TOKEN;

    if (!token) {
      return NextResponse.redirect(url);
    }
  }
}
