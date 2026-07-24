import "./Features.css";

const features = [
  {
    icon: "📈",
    title: "Live Market Data",
    desc: "Track real-time cryptocurrency prices and market movements.",
  },
  {
    icon: "🔍",
    title: "Smart Search",
    desc: "Quickly find your favorite cryptocurrencies.",
  },
  {
    icon: "📊",
    title: "Interactive Charts",
    desc: "Analyze historical prices with detailed charts.",
  },
  {
    icon: "💱",
    title: "Multi Currency",
    desc: "View prices in USD, EUR, and INR.",
  },
  {
    icon: "🔒",
    title: "Secure Login",
    desc: "Protected authentication powered by Clerk.",
  },
  {
    icon: "⚡",
    title: "Fast Updates",
    desc: "Powered by the CoinGecko API for fresh market data.",
  },
];

const Features = () => {
  return (
    <div className="features">
      <h1>Features</h1>
      <p className="subtitle">
        Everything you need to stay updated with the crypto market.
      </p>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;