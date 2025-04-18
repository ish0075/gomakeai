import { NextRequest, NextResponse } from "next/server";

const agents = ["Stef AI", "Clarissa", "Curt Dog", "Big D", "Songify"];

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const agent = agents[Math.floor(Math.random() * agents.length)];
  const response = `You said: "${message}". ${agent} is working on it.`;

  return NextResponse.json({ agent, response });
}
