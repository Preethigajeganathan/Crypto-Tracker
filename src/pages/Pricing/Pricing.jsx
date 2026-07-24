import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing</h1>
      <p className="subtitle">Simple pricing for everyone.</p>

      <div className="price-card">
        <h2>Free Plan</h2>

        <h1>$0</h1>

        <ul>
          <li>✅ Live Crypto Prices</li>
          <li>✅ Search Coins</li>
          <li>✅ Interactive Charts</li>
          <li>✅ Coin Details</li>
          <li>✅ Multiple Currency Support</li>
          <li>✅ Secure Authentication</li>
        </ul>

        <button>Current Plan</button>
      </div>
    </div>
  );
};

export default Pricing;