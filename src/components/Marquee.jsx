import React, { useState, useEffect } from 'react'

const Marquee = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url =
          "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
        const options = {
          method: "GET",
          headers: {
            "content-type": "application/octet-stream",
            "X-RapidAPI-Key": "bb9444fc44msh08cd912ca78cd26p14d096jsn8d76a3434536",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          },
        };
    
        fetch(url, options)
          .then((response) => response.json())
          .then((result) => {
            const coins = result.data.coins;
            setData(coins);
          })
          .catch((error) => console.log(error));
      }, []);
  return (
    <div className='py-4'>
    <div className="flex flex-row gap-5 relative overflow-x-hidden mt-4">
        {data.map((item) => (
          <div
            key={item.uuid}
            className="flex flex-row items-center gap-3 animate-marquee whitespace-nowrap"
          >
            <img src={item.iconUrl} alt={item.name} className="w-5 h-5" />
            <p className="text-black">${item.price}</p>
            <span
              className={item.change >= 0 ? "text-green-600" : "text-red-600"}
            >
              {item.change}%
            </span>
          </div>
        ))}
        {data.map((item) => (
          <div
            key={item.uuid}
            className="flex flex-row items-center gap-3 animate-marquee2 whitespace-nowrap"
          >
            <img src={item.iconUrl} alt={item.name} className="w-5 h-5" />
            <p className="text-black">${item.price}</p>
            <span
              className={item.change >= 0 ? "text-green-600" : "text-red-600"}
            >
              {item.change}%
            </span>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Marquee