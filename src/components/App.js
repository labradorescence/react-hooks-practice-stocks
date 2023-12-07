import React, {useState, useEffect} from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {

  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(response => response.json())
    .then(stocksArr => {
      setStocks(stocksArr)
    })
  }, [])
  

  return (
    <div>
      <Header />
      <MainContainer stocks={stocks} />
    </div>
  );
}

export default App;
