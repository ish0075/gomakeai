import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
apiVersion: "2025-03-31.basil",

});

const PRICES: Record<string, string> = {
  solo: process.env.STRIPE_PRICE_SOLO!,
  team: process.env.STRIPE_PRICE_TEAM!,
  growth: process.env.STRIPE_PRICE_GROWTH!,
};

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const tier = url.pathname.split("/").slice(-2, -1)[0]; // gets the dynamic [tier]

  if (!PRICES[tier]) {
    return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${url.protocol}//${url.host}`;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: PRICES[tier],
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error", err);
    return NextResponse.json({ error: "Stripe error" }, { status: 500 });
  }
}
