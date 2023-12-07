import React from "react";
import Stock from "./Stock";

function StockContainer({stocks,onSetMyPortfolio }) {

  console.log("from container", stocks)

  const eachStock = stocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} onSetMyPortfolio={onSetMyPortfolio} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {eachStock}
    </div>
  );
}

export default StockContainer;
