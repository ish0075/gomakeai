import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    error: "Stripe is currently disabled. Please try again later.",
  }, { status: 503 });
}
