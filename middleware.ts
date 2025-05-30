import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/session";

interface Routes {
  [key: string]: boolean
}

const publicUrlOnly: Routes = {
  "/": true,
  "/login": true,
  "/sms": true,
  "/create-account": true,
  "/github/start": true,
  "/github/complete": true
}

export async function middleware(req: NextRequest) {
  const session = await getSession();
  const exist = publicUrlOnly[req.nextUrl.pathname];
  if (!session.id) {
    if (!exist) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  } else {
    if (exist) {
      return NextResponse.redirect(new URL('/products', req.url))
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}