// this is where our middleware routes go
// this checks is a user is logged in if they try to access a private page
// if they aren't it redirects them to login, if they are, it proceeds to load the page

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
  matcher: '/about/:path*',
}