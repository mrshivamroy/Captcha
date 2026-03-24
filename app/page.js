export default function Home() {
  const BASE_URL = "https://freeimagecaptcha.vercel.app"; 

  return (
    <main className="min-h-screen bg-black text-gray-300 p-6 md:p-12 lg:p-24 font-sans relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Hero Section */}
        <header className="text-center space-y-6 pt-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-sm font-medium text-gray-400">
            v1.0 Public Release
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-sm">
            🛡️ Free Image CAPTCHA
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A free, public, image-based CAPTCHA API. Returns a random image and validates user input securely on the server.
          </p>
        </header>

        {/* API Endpoints Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Generate CAPTCHA Card */}
          <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 backdrop-blur-md hover:border-cyan-500/40 hover:bg-gray-900/60 transition-all duration-300 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-cyan-500/10 text-cyan-400 p-2 rounded-xl">📌</span> 
              Generate CAPTCHA
            </h2>
            <div className="bg-black/80 text-cyan-300 px-4 py-3 rounded-xl font-mono text-sm inline-block mb-6 border border-gray-800 w-full shadow-inner">
              <span className="text-green-400 font-bold mr-2">GET</span> 
              {BASE_URL}/api/captcha
            </div>
            <pre className="bg-[#0a0a0a] text-gray-300 p-5 rounded-xl overflow-x-auto border border-gray-800 text-sm font-mono shadow-inner">
{`{
  "captchaId": "uuid",
  "image": "${BASE_URL}/captcha-images/Apple.png"
}`}
            </pre>
          </div>

          {/* Validate CAPTCHA Card */}
          <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 backdrop-blur-md hover:border-purple-500/40 hover:bg-gray-900/60 transition-all duration-300 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-purple-500/10 text-purple-400 p-2 rounded-xl">📌</span> 
              Validate CAPTCHA
            </h2>
            <div className="bg-black/80 text-purple-300 px-4 py-3 rounded-xl font-mono text-sm inline-block mb-6 border border-gray-800 w-full shadow-inner">
              <span className="text-yellow-400 font-bold mr-2">POST</span> 
              {BASE_URL}/api/validate
            </div>
            <pre className="bg-[#0a0a0a] text-gray-300 p-5 rounded-xl overflow-x-auto border border-gray-800 text-sm font-mono shadow-inner">
{`{
  "captchaId": "uuid",
  "userInput": "Apple"
}`}
            </pre>
          </div>
        </section>

        {/* Info Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-4">🔠 Case Sensitivity</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              CAPTCHA validation is <b className="text-white bg-white/10 px-2 py-1 rounded">case-sensitive</b>. Input must match the image text exactly.
            </p>
          </div>

          <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-4">📐 Image Guidelines</h2>
            <ul className="space-y-3 text-gray-400 text-lg">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> <b>Width:</b> 150–200px</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> <b>Height:</b> 50–80px</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> <b>Aspect Ratio:</b> 3:1 or 4:1</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> <b>Formats:</b> PNG / JPG / JPEG</li>
            </ul>
          </div>
        </section>

        {/* HTML Usage Example */}
        <section className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">🧪 HTML Usage Example</h2>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
          </div>
          <pre className="bg-[#0a0a0a] text-gray-300 p-6 rounded-xl overflow-x-auto border border-gray-800 text-sm font-mono shadow-inner leading-relaxed">
            <code>
{`<img id="captcha" width="160" height="60" alt="captcha" />

<input
  type="text"
  id="captchaInput"
  placeholder="Case-sensitive"
  autocomplete="off"
/>

<button onclick="verify()">Verify</button>

<script>
let captchaId = "";

fetch('${BASE_URL}/api/captcha')
  .then(res => res.json())
  .then(data => {
    captchaId = data.captchaId;
    document.getElementById('captcha').src = data.image;
  });

function verify() {
  fetch('${BASE_URL}/api/validate', {
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
            </code>
          </pre>
        </section>

        {/* Footer / Tech Stack */}
        <footer className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-12 pb-8 border-t border-gray-800/50">
          <div className="text-center lg:text-left">
            <h2 className="text-lg font-bold text-white mb-4">📦 Tech Stack</h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {['Next.js (App Router)', 'JSX only', 'Static images', 'Fetch API'].map((tech) => (
                <span key={tech} className="bg-gray-900/80 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700 hover:border-gray-500 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 text-amber-400/90 p-5 rounded-2xl text-sm max-w-md backdrop-blur-sm shadow-lg flex gap-3 items-start">
            <span className="text-xl">⚠️</span>
            <p className="leading-relaxed">
              <b>In-memory storage resets on server restart.</b> <br/>
              Suitable for demo and free public API usage.
            </p>
          </div>
        </footer>

      </div>
    </main>
  );
}
