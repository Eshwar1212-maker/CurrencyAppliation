import React from "react";
import CoinItem from "./CoinItem";
import { Link } from "react-router-dom";
import Coin from "../pages/Coin";



const Coins = (props) => {
  return (
    <div className="hidden md:block max-w-[1140px] m-2 p-2 text-center items-center">
      <div className="flex justify-between items-center bg-[#1e1f1f] rounded-xl">
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p>Volume</p>
            <p>Market Cap</p>
      </div>

      {props.coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            <CoinItem coins={coins} />
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;






