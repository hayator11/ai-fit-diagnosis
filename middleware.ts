import { NextRequest, NextResponse } from "next/server";

const REALM = "AI Dougu Admin";

function unauthorized(message = "Authentication required") {
  return new NextResponse(message, {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`
    }
  });
}

export function middleware(request: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    if (process.env.NODE_ENV === "development") {
      return NextResponse.next();
    }

    return unauthorized("Admin is locked. Set ADMIN_PASSWORD.");
  }

  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Basic ")) {
    return unauthorized();
  }

  try {
    const encoded = authorization.replace("Basic ", "");
    const [, password] = atob(encoded).split(":");

    if (password === adminPassword) {
      return NextResponse.next();
    }
  } catch {
    return unauthorized();
  }

  return unauthorized();
}

export const config = {
  matcher: ["/admin/:path*"]
};
