import React from 'react'
import './Coin.css'
import {useParams} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import {CoinContext} from '../../context/CoinContext.jsx'
import LineChart from '../../components/LineChart/LineChart.jsx'

const Coin = () => {

  const {coinId} = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const {Currency} = useContext(CoinContext);

  const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;

  const fetchCoinData = async () => {
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
  headers: {
    "x-cg-demo-api-key": apiKey,
  },
})
  .then((response) => response.json())
  .then((data) => setCoinData(data))
  .catch((error) => console.error(error));
  }

  const fetchHistoricalData = async ()=>{
    fetch(
  `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${Currency.name}&days=10&interval=daily`,
  {
    headers: {
      "x-cg-demo-api-key": apiKey,
    },
  }
)
  .then((response) => response.json())
  .then((data) => setHistoricalData(data))
  .catch((error) => console.error(error));
  }

  useEffect(()=>{
    fetchCoinData();
    fetchHistoricalData();
  },[Currency])

  if(coinData && historicalData){
  return (
    <div className='coin'>
       <div className="coin-name">
        <img src={coinData.image.large} />
        <p><b>{coinData.name}({coinData.symbol.toUpperCase()})</b></p>
       </div>
       <div className="coin-chart">
        <LineChart historicalData={historicalData} />
       </div>

       <div className="coin-info">
        <ul>
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul>
          <li>Current Price</li>
          <li>{Currency.Symbol} {coinData.market_data.current_price[Currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>Market Cap</li>
          <li>{Currency.Symbol} {coinData.market_data.market_cap[Currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24 Hour high</li>
          <li>{Currency.Symbol} {coinData.market_data.high_24h[Currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24 Hour low</li>
          <li>{Currency.Symbol} {coinData.market_data.low_24h[Currency.name].toLocaleString()}</li>
        </ul>
       </div>
    </div>
  )
}else{
  return(
    <div className='spinner'>
      <div className="spin"></div>
    </div>
  )
}
}

export default Coin