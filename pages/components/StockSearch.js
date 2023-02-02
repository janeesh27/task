import React, { useState, useEffect } from "react";

const API_KEY = "cfd89v1r01qj357esem0cfd89v1r01qj357esemg";



const StockSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);

  const API_URL = `https://finnhub.io/api/v1/quote?symbol=${searchTerm}&token=${API_KEY}`;

  const handleSearch = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.symbol) {
      setSearchResults([data]);
    } else {
      console.error("Search results are not in the expected format:", data);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStockSelect = (stock) => {
    setSelectedStock(stock);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl align-middle font-medium mb-4">StockCheck</h2>
        <input
          type="text"
          placeholder="Search for a stock by symbol"
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-400"
        />
        <button
          className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
        <ul className="mt-8">
          {searchResults.map((result) => (
            <li key={result.symbol} onClick={() => handleStockSelect(result)}>
              {result.symbol}
            </li>
          ))}
        </ul>
        {selectedStock && (
          <div className="mt-8">
            <h2 className="text-lg font-medium">{selectedStock.symbol}</h2>
            <p>Current Price: {selectedStock.price}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockSearch;
