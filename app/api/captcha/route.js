import { NextResponse } from "next/server";
const BASE_URL = "https://freeimagecaptcha.vercel.app";
const captchas = [
  { file: "2en7g.png", answer: "2en7g" },
  { file: "325fb.png", answer: "325fb" },
  { file: "3bIHDdS.png", answer: "3bIHDdS" },
  { file: "3den6.png", answer: "3den6" },
  { file: "3EEkyrP.png", answer: "3EEkyrP" },
  { file: "3n3cf.png", answer: "3n3cf" },
  { file: "3wr7H76.png", answer: "3wr7H76" },
  { file: "56ncx.png", answer: "56ncx" },
  { file: "5ZVw4dS.png", answer: "5ZVw4dS" },
  { file: "75NP2DW.png", answer: "75NP2DW" },
  { file: "7dgc2.png", answer: "7dgc2" },
  { file: "8db67.png", answer: "8db67" },
  { file: "8fexn.png", answer: "8fexn" },
  { file: "8t3Umzg.png", answer: "8t3Umzg" },
  { file: "A8t6HbV.png", answer: "A8t6HbV" },
  { file: "awf8pCB.png", answer: "awf8pCB" },
  { file: "B2v7KLp.png", answer: "B2v7KLp" },
  { file: "bLC5CIN.png", answer: "bLC5CIN" },
  { file: "buPwunT.png", answer: "buPwunT" },
  { file: "bybNmeZ.png", answer: "bybNmeZ" },
  { file: "d2nbn.png", answer: "d2nbn" },
  { file: "dmw8n.png", answer: "dmw8n" },
  { file: "ggd7m.png", answer: "ggd7m" },
  { file: "gp22x.png", answer: "gp22x" },
  { file: "nn4wx.png", answer: "nn4wx" },
  { file: "pdw38.png", answer: "pdw38" },
  { file: "w46ep.png", answer: "w46ep" },
  { file: "xymfn.png", answer: "xymfn" },
];

const store = new Map();

export async function GET() {
  const captcha = captchas[Math.floor(Math.random() * captchas.length)];
  const captchaId = crypto.randomUUID();

  store.set(captchaId, captcha.answer);

  const res = NextResponse.json({
    captchaId,
    image: `${BASE_URL}/captcha-images/${captcha.file}`
  });

  // ⚡ Allow cross-origin requests
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "*");

  return res;
}

// Handle preflight requests
export async function OPTIONS() {
  const res = NextResponse.json({});
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "*");
  return res;
}

export { store };
