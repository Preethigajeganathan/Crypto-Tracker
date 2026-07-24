import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
import { useUser, SignedIn, SignedOut, SignInButton, UserButton, } from "@clerk/clerk-react";

const Home = () => {

    const {allCoin,Currency} = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState('');

    const { user } = useUser();

    const displayName =
      user?.firstName ||
      user?.username ||
      user?.primaryEmailAddress?.emailAddress?.split("@")[0] ||
      "User";

    const inputHandler = (event) =>{
        setInput(event.target.value);
        if(event.target.value == ""){
            setDisplayCoin(allCoin);
        }
    }

    const searchHandler = async (event)=>{
        event.preventDefault();
        const coins = await allCoin.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLocaleLowerCase())
        })
        setDisplayCoin(coins)
    }

    useEffect(()=>{
        setDisplayCoin(allCoin)
    },[allCoin])

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome  {displayName}! <br />
           To Crypto Marketplace
        </h1>
        <p>
          Track real-time cryptocurrency prices, monitor market trends, and
          explore thousands of digital assets from around the world.
        </p>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            onChange={inputHandler}
            list="coinlist"
            value={input}
            placeholder="Search crypto..."
            required
          />

          <datalist id="coinlist">
            {allCoin.map((item, index) => {
              return <option key={index} value={item.name} />;
            })}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24Hrs Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} />
              <p>{item.name + "_" + item.symbol}</p>
            </div>
            <p>
              {Currency.Symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={
                item.market_cap_change_percentage_24h > 0 ? "green" : "red"
              }
            >
              {Math.floor(item.market_cap_change_percentage_24h * 100) / 100}
            </p>
            <p className="market-cap">
              {Currency.Symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home