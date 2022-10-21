import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="bg-slate-800 h-[100px]">
    <Link to="/">
      <div className="flex justify-center items-center p-3 m-0">
        <FaCoins className="" size={40} />
        <h1 className="text-3xl">
          Coin <span className="font-secondFont text-4xl">Search</span>
        </h1>
      </div>
    </Link>
    </div>
  );
};

export default Nav;
