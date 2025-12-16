import { NextResponse } from "next/server";
import { store } from "../captcha/route";

// Rate limiting store for validation
const rateLimitStore = new Map();
const MAX_REQUESTS = 10; // max requests
const WINDOW_MS = 60 * 1000; // per 1 minute

function isRateLimited(ip) {
  const now = Date.now();
  const data = rateLimitStore.get(ip) || { count: 0, lastRequestTime: now };

  if (now - data.lastRequestTime > WINDOW_MS) {
    data.count = 0;
    data.lastRequestTime = now;
  }

  data.count += 1;
  rateLimitStore.set(ip, data);

  return data.count > MAX_REQUESTS;
}

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("host") || "unknown";

  if (isRateLimited(ip)) {
    const res = NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429 }
    );
    res.headers.set("Access-Control-Allow-Origin", "*");
    return res;
  }

  const { captchaId, userInput } = await req.json();

  const correct = store.get(captchaId);
  const success = correct === userInput; // case-sensitive

  // One-time use
  store.delete(captchaId);

  const res = NextResponse.json({ success });

  // CORS headers
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "*");

  return res;
}

// Handle OPTIONS (preflight) requests
export async function OPTIONS() {
  const res = NextResponse.json({});
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "*");
  return res;
}
