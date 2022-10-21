import { useEffect, useState } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="text-white bg-black items-center text-center">
    <Nav />
    <Routes>
      <Route path='/' element={<Coins coins={coins} />} />
      <Route path='/coin' element={<Coin />}>
        <Route path=':coinId' element={<Coin />} />
      </Route>
    </Routes>

  </div>
  );
}

export default App;
