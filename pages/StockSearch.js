import React, { useState, useEffect } from "react";

const API_KEY = "cfd89v1r01qj357esem0cfd89v1r01qj357esemg";
const API_URL = `https://finnhub.io/api/v1/quote?symbol=AAPL&token=${API_KEY}`;


  const StockSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
  
        if (Array.isArray(data)) {
          setSearchResults(data);
        } else {
          console.error("Search results are not an array:", data);
        }
      };
  
      fetchData();
    }, []);
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleStockSelect = (stock) => {
      setSelectedStock(stock);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a stock by symbol"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <ul>
          {Array.isArray(searchResults) ? (
            searchResults.map((result) => (
              <li key={result.symbol} onClick={() => handleStockSelect(result)}>
                {result.symbol}
              </li>
            ))
          ) : (
            <li>No search results found</li>
          )}
        </ul>
        {selectedStock && (
          <div>
            <h2>{selectedStock.symbol}</h2>
            <p>Current Price: {selectedStock.price}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default StockSearch;