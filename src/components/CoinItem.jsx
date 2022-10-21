import React from "react";

const CoinItem = (props) => {
  return (
    <div className="flex justify-between p-2 items-center cursor-pointer bg-[#1e1f1f] rounded-xl ease-in duration-100 hover:scale-[110%] text-center items-center">
      <p>{props.coins.market_cap_rank}</p>
      <div className="text-center items-center">
        <img className="h-[40px]" src={props.coins.image} alt="" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>${props.coins.current_price}</p>
      <p>{props.coins.price_change_percentage_24h}%</p>
      <p>${props.coins.total_volume}</p>
      <p>${props.coins.market_cap}</p>
    </div>
  );
};

export default CoinItem;
