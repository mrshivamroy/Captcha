import { NextResponse } from "next/server";
import { store } from "../captcha/route";

export async function POST(req) {
  const { captchaId, userInput } = await req.json();

  const correct = store.get(captchaId);

  const success = correct === userInput;

  // One-time CAPTCHA
  store.delete(captchaId);

  return NextResponse.json({ success });
}
