import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks}) {

  const [myPortfolio, setMyPortfolio] =  useState([])

  const onSetMyPortfolio = (newPortfolio) => {
    let newMyPortfolio = myPortfolio.push(newPortfolio)
    setMyPortfolio(myPortfolio.push(newPortfolio))
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onSetMyPortfolio={onSetMyPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
