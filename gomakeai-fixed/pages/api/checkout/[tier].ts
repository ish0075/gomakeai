import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const pricingMap: Record<string, string> = {
  freemium: process.env.STRIPE_PRICE_FREEMIUM!,
  solo: process.env.STRIPE_PRICE_SOLO!,
  team: process.env.STRIPE_PRICE_TEAM!,
  growth: process.env.STRIPE_PRICE_GROWTH!,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tier } = req.query;
  const referrer = req.cookies["ref"] || null;

  if (req.method !== "GET") return res.status(405).end();

  if (!tier || typeof tier !== "string" || !pricingMap[tier]) {
    return res.status(400).json({ error: "Invalid tier" });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: pricingMap[tier], quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?tier=${tier}&ref=${referrer}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing?cancelled=true`,
    metadata: {
      tier,
      referrer: referrer || "none",
    },
  });

  res.redirect(303, session.url!);
}
