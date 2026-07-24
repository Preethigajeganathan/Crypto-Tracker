import React, { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider =(props)=>{

    const [allCoin,setAllCoin]=useState([]);
    const [Currency, setCurrency] = useState({
        name:"usd",
        Symbol:"$"
    })

     const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;

   const fetchAllCoin = () => {
  fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${Currency.name}`,
    {
      method: "GET",
      headers: {
        "x-cg-demo-api-key": apiKey,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {setAllCoin(data); })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// fetchAllCoin();

useEffect(()=>{
    fetchAllCoin()
},[Currency])

    const contextValue={
        allCoin,Currency, setCurrency

    }

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;