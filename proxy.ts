import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAdminAccess } from "@/lib/admin/access";
import { isAdminDashboardEnabled } from "@/lib/admin/config";

const noStoreHeaders = {
  "Cache-Control": "private, no-store, max-age=0",
  "X-Robots-Tag": "noindex, nofollow",
};

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") return NextResponse.redirect(new URL("/it", request.url), 308);

  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!isAdminDashboardEnabled()) {
      return new NextResponse(null, { status: 404, headers: noStoreHeaders });
    }

    if (request.nextUrl.pathname === "/admin/login") {
      return NextResponse.next({ headers: noStoreHeaders });
    }

    const access = await getAdminAccess(request.headers);
    if (access.status === "unauthenticated") {
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      for (const [name, value] of Object.entries(noStoreHeaders)) response.headers.set(name, value);
      return response;
    }
    if (access.status !== "allowed") {
      return new NextResponse("Accesso negato", { status: 403, headers: noStoreHeaders });
    }

    return NextResponse.next({ headers: noStoreHeaders });
  }

  return NextResponse.next();
}

export const config = { matcher: ["/", "/admin/:path*"] };
