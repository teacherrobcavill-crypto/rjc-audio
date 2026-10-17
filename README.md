# RJC Audio — Official Website

High-performance, modern, and **100% free-to-host** website for **RJC Audio** (Rob Cavill), specialist Indie Rock and Pop mixing.

Rebuilt from Hostinger/Zyro to run permanently with **£0/month hosting fees** via Cloudflare Pages and GitHub.

---

## ⚡ Features
- **£0 Hosting Forever**: Hosted on Cloudflare Pages global edge network with zero maintenance costs.
- **Custom Audio Showreel Engine**: Embedded HTML5 player with waveform scrubbing, volume control, mute, and single-playback exclusivity.
- **Mobile Responsive Design**: Modern dark slate & warm gold studio aesthetic with sticky navbar and mobile menu drawer.
- **Service & Package Tiers**: First Mix Free, Pro Mix (£200), Elite Mix (£300).
- **Mastering & Dolby Atmos Feature**: Showcasing partnership with Lewis Chapman (Ed Sheeran, Charli XCX).
- **Client Testimonials**: Verified reviews from Network Nick and Simon Barnard (Guitar Techniques).
- **Direct Contact & Inquiry Form**: Built-in lead capture for Free Mix claims and project bookings.
- **WhatsApp Quick Chat**: Direct mobile chat integration.
- **SEO & Legacy Redirects**: Includes `_redirects` and `_headers` to preserve all existing Google search rankings and Hostinger links.

---

## 📁 Repository Structure

```text
├── index.html              # Main homepage (Hero, Showreel, Pricing, Bio, Contact)
├── tandcs.html             # Terms & Conditions (UK law & GDPR compliant)
├── privacy-policy.html     # Privacy Policy (UK GDPR compliant)
├── _headers                # Cloudflare caching & security headers (audio byte-range streaming)
├── _redirects              # Seamless redirects for legacy Zyro URLs
├── css/
│   └── styles.css          # Responsive dark & gold studio styles
├── js/
│   └── main.js             # Audio playback engine & form handler
└── assets/
    ├── audio/              # Showreel MP3s (Wynona, Obsessed)
    └── images/             # High-res studio photography & branding logo
```

---

## 🚀 How to Deploy on Cloudflare Pages (Free Forever)

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** → **Create application** → **Pages** tab.
3. Click **Connect to Git** and authorize your GitHub account.
4. Select the repository: `teacherrobcavill-crypto/rjc-audio`.
5. Configuration settings:
   - **Project name**: `rjc-audio`
   - **Production branch**: `main`
   - **Framework preset**: `None` (Pure static HTML/CSS/JS)
   - **Build command**: *(Leave blank)*
   - **Build output directory**: *(Leave blank or `/`)*
6. Click **Save and Deploy**. Your site will be live on `rjc-audio.pages.dev` in under 30 seconds!

---

## 🌐 Connecting your Custom Domain (`rjcmusicproduction.co.uk`)

1. In your Cloudflare Pages dashboard for `rjc-audio`, click the **Custom domains** tab.
2. Click **Set up a domain** and type `rjcmusicproduction.co.uk` (and `www.rjcmusicproduction.co.uk`).
3. Follow the simple DNS prompts. Cloudflare will automatically provision a free SSL certificate.
4. Once verified, cancel your previous Hostinger hosting plan!

---

## 💳 Adding Stripe Payment Links (Optional)
If you wish to allow instant checkout for the **Pro Mix (£200)** or **Elite Mix (£300)**:
1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/payment-links).
2. Click **New Payment Link**, set the title and price (£200 or £300).
3. Copy your link (e.g. `https://buy.stripe.com/...`) and replace `#contact` on the respective button in `index.html`.
