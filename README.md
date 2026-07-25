# 🚀 Crypto Tracker

A modern cryptocurrency tracking web application built with **React**, **Vite**, and the **CoinGecko API**. Track real-time cryptocurrency prices, view detailed market statistics, and analyze historical price charts with a clean and responsive interface.

## 🌟 Features

- 📈 Real-time cryptocurrency prices
- 🔍 Search cryptocurrencies
- 📊 Interactive price charts
- 💹 Market Cap, 24H High/Low, and Rank
- 💱 Multiple currency support (USD, EUR, INR)
- 🔐 User authentication with Clerk
- 📱 Fully responsive design
- ⚡ Fast performance with Vite

# 🚀 Demo


Live Demo: https://crypto-tracker-lilac-five.vercel.app/

## 🛠️ Tech Stack

- React.js
- Vite
- React Router DOM
- CoinGecko API
- Google Charts (Line Chart)
- Clerk Authentication
- CSS3

## 📚 Libraries Used

- **react-router-dom** – Client-side routing
- **react-google-charts** – Interactive cryptocurrency price charts
- **@clerk/clerk-react** – User authentication

## 📂 Project Structure

```
src
├── assets
├── components
│   ├── Footer
│   ├── LineChart
│   └── Navbar
├── context
├── pages
│   ├── Auth
│   ├── Blog
│   ├── Coin
│   ├── Features
│   ├── Home
│   └── Pricing
├── App.jsx
└── main.jsx
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Preethigajeganathan/crypto-tracker.git
```

### Navigate into the project

```bash
cd crypto-tracker
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

## 🔑 Environment Variables

Create a `.env` file in the project root.

```env
VITE_COINGECKO_API_KEY=your_api_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

> Never commit your `.env` file to GitHub.


## 🚀 Deployment

You can deploy this project using:

- Vercel
- Netlify
- GitHub Pages (with Vite configuration)

Remember to add your environment variables in the deployment platform.

## 📖 API

This project uses the **CoinGecko API** for cryptocurrency market data.

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push to your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Preethiga**

GitHub: https://github.com/Preethigajeganathan

---

⭐ If you found this project helpful, don't forget to give it a star!