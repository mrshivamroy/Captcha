export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial", maxWidth: 900 }}>
      <h1>🛡️ Free Image CAPTCHA Generator API</h1>

      <p>
        A free, public, image-based CAPTCHA API.
        Returns a random image and validates user input securely
        on the server.
      </p>

      <hr />

      <h2>📌 Generate CAPTCHA</h2>
      <pre>GET /api/captcha</pre>

      <pre>
{`{
  "captchaId": "uuid",
  "image": "/captcha-images/Apple.png"
}`}
      </pre>

      <h2>📌 Validate CAPTCHA</h2>
      <pre>POST /api/validate</pre>

      <pre>
{`{
  "captchaId": "uuid",
  "userInput": "Apple"
}`}
      </pre>

      <h2>🔠 Case Sensitivity</h2>
      <p>
        CAPTCHA validation is <b>case-sensitive</b>.
        Input must match the image text exactly.
      </p>

      <h2>📐 Image Dimensions</h2>
      <ul>
        <li><b>Width:</b> 150–200px</li>
        <li><b>Height:</b> 50–80px</li>
        <li><b>Aspect Ratio:</b> 3:1 or 4:1</li>
        <li><b>Formats:</b> PNG / JPG / JPEG</li>
      </ul>

      <hr />

      <h2>🧪 HTML Usage Example</h2>

      <pre>
{`<img
  id="captcha"
  width="160"
  height="60"
  alt="captcha"
/>

<input
  type="text"
  id="captchaInput"
  placeholder="Case-sensitive"
  autocomplete="off"
/>

<button onclick="verify()">Verify</button>

<script>
let captchaId = "";

fetch('/api/captcha')
  .then(res => res.json())
  .then(data => {
    captchaId = data.captchaId;
    document.getElementById('captcha').src = data.image;
  });

function verify() {
  fetch('/api/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      captchaId,
      userInput: document.getElementById('captchaInput').value
    })
  })
  .then(res => res.json())
  .then(r => alert(r.success ? '✅ Valid CAPTCHA' : '❌ Invalid CAPTCHA'));
}
</script>`}
      </pre>

      <hr />

      <h2>📦 Tech Stack</h2>
      <ul>
        <li>Next.js (App Router)</li>
        <li>JSX only</li>
        <li>Static images</li>
        <li>Server-side validation</li>
      </ul>

      <p style={{ color: "#777" }}>
        ⚠️ In-memory storage resets on server restart.
        Suitable for demo and free public API usage.
      </p>
    </main>
  );
}
