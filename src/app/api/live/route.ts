import { NextResponse } from "next/server";
import { LIVE_MATCHES, getLiveCount } from "@/lib/live";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    liveCount: getLiveCount(),
    matches: LIVE_MATCHES,
  });
}
