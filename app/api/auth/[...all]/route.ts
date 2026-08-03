import { toNextJsHandler } from "better-auth/next-js";
import { NextResponse } from "next/server";
import { getAdminAuth } from "@/lib/admin/auth";
import { isAdminDashboardEnabled } from "@/lib/admin/config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function handle(request: Request, method: "GET" | "POST") {
  if (!isAdminDashboardEnabled()) {
    return new NextResponse(null, { status: 404 });
  }

  const handler = toNextJsHandler(getAdminAuth())[method];
  const response = await handler(request);
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export function GET(request: Request) {
  return handle(request, "GET");
}

export function POST(request: Request) {
  return handle(request, "POST");
}
