import { NextResponse } from "next/server";
import { store } from "../captcha/route";

export async function POST(req) {
  const { captchaId, userInput } = await req.json();

  const correct = store.get(captchaId);
  const success = correct === userInput;

  store.delete(captchaId);

  const res = NextResponse.json({ success });

  // ⚡ Allow cross-origin requests
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "*");

  return res;
}

// Handle preflight requests
export async function OPTIONS() {
  const res = NextResponse.json({});
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "*");
  return res;
}
