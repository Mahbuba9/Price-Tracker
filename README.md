# 🛒 বাজার দর (BazarDor)

বাজার দর is a Bangla grocery price tracker. It shows today's prices of daily essentials (rice, lentils, oil, vegetables, fish, meat, eggs & dairy, spices) with price changes and market-wise comparison across Bangladesh.

🔗 **Live site:** https://price-tracker-gr3o.vercel.app
📦 **Repository:** https://github.com/Mahbuba9/Price-Tracker

## ✨ Key Features

1. **Live price ticker:** an infinite scrolling strip showing emoji, name, price per unit, and a ▲/▼ percentage change.
2. **Risers and fallers:** the home page highlights the top 6 products whose prices rose and the top 6 whose prices fell today.
3. **Category pages with sorting:** browse by category and sort by default, price low to high, or price high to low (numeric sorting).
4. **Product details:** minimum, maximum and average price, plus a market-by-market price table (protected route).
5. **Authentication:** email/password, Google and GitHub login using Better Auth, with toast notifications.
6. **Update profile:** logged-in users can change their name from the profile page.
7. **Responsive design:** works on mobile, tablet and desktop, with skeleton loaders and friendly 404 pages.

## 🛠️ Technologies Used

- **Next.js** (App Router) and **TypeScript**
- **Tailwind CSS** and **DaisyUI**
- **Better Auth** (email/password, Google, GitHub)
- **MongoDB Atlas**
- **react-hot-toast**
- **Vercel** for deployment

## 🚀 Getting Started

```bash
git clone https://github.com/Mahbuba9/Price-Tracker.git
cd Price-Tracker
npm install
npm run dev
```

Create a `.env.local` file with:

```
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

## 🌐 API

Data comes from `https://openapi.programming-hero.com/api/bazardor` (`/products`, `/categories`).