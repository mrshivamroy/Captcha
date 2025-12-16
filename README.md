# 🛡️ Free Image CAPTCHA Generator API

A lightweight, free, image-based CAPTCHA generator built with **Next.js (App Router)**.  
This project provides a **public CAPTCHA generation API** and a **server-side validation API**, using static images with **case-sensitive validation**.

> ⚠️ Designed for demo, learning, and low-risk usage.

---

## ✨ Features

- ✅ Next.js App Router
- ✅ JSX only (no TypeScript)
- ❌ No `src/` directory
- 🖼️ Static image CAPTCHA
- 🔐 Server-side validation
- 🔠 Case-sensitive matching
- ♻️ One-time CAPTCHA usage
- 📖 Built-in documentation homepage

---

## 📁 Project Structure


free-image-captcha/
├── app/
│   ├── page.jsx
│   └── api/
│       ├── captcha/
│       │   └── route.js
│       └── validate/
│           └── route.js
│
├── public/
│   └── captcha-images/
│       ├── Apple.png
│       ├── Car.jpg
│       └── House.jpeg
│
├── package.json
└── next.config.js


---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
````

### 2️⃣ Run Development Server

```bash
npm run dev
```

Open in your browser:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

### 📌 Generate CAPTCHA

**Endpoint**

```
GET /api/captcha
```

**Response**

```json
{
  "captchaId": "uuid",
  "image": "/captcha-images/Apple.png"
}
```

---

### 📌 Validate CAPTCHA

**Endpoint**

```
POST /api/validate
```

**Body**

```json
{
  "captchaId": "uuid",
  "userInput": "Apple"
}
```

**Response**

```json
{
  "success": true
}
```

---

## 🔠 Case Sensitivity

CAPTCHA validation is **case-sensitive**.

| Input   | Result    |
| ------- | --------- |
| `Apple` | ✅ Valid   |
| `apple` | ❌ Invalid |
| `APPLE` | ❌ Invalid |

---

## 📐 Image Guidelines

Recommended CAPTCHA image dimensions:

* **Width:** 150–200px
* **Height:** 50–80px
* **Aspect Ratio:** 3:1 or 4:1
* **Formats:** PNG, JPG, JPEG

---

## 🧪 HTML Usage Example

```html
<img id="captcha" width="160" height="60" alt="captcha" />

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
  .then(r => alert(r.success ? 'Valid CAPTCHA' : 'Invalid CAPTCHA'));
}
</script>
```

---

## ⚠️ Limitations

* CAPTCHA answers are stored **in memory**
* Data resets on server restart
* No expiration or rate limiting by default

---

## 🔒 Security Notes

This CAPTCHA system is intended for:

* Learning
* Demo projects
* Low-risk forms

For production use, consider adding:

* CAPTCHA expiration
* Rate limiting
* Redis or database storage
* Image noise or distortion
* Bot detection logic

---

## 📦 Tech Stack

* **Next.js** (App Router)
* **JavaScript (JSX)**
* **Static Images**
* **Fetch API**

---

## 📄 License

MIT License
Free to use, modify, and distribute.

---

## 🤝 Contributions

Pull requests and improvements are welcome!

---

## ⭐ Support

If you find this useful, consider starring the repository 🌟

```

---

If you want, I can also:
- Add **badges** (Next.js, MIT, version)
- Create a **production-ready README**
- Add **API usage examples for React, Angular, Node, PHP**
- Write a **SECURITY.md**

Just tell me 🚀
```
