import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer( { allStocks, portfolio, setPortfolio, sortAndFilter, setSortAndFilter, sortedAndFilteredStocks } ) {

  return (
    <div>
      <SearchBar sortAndFilter={ sortAndFilter } setSortAndFilter={ setSortAndFilter }/>
      <div className="row">
        <div className="col-8">
          <StockContainer
            allStocks={ allStocks }
            sortedAndFilteredStocks={ sortedAndFilteredStocks }
            portfolio={ portfolio }
            setPortfolio={ setPortfolio }
          />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={ portfolio } setPortfolio={ setPortfolio }/>
        </div>
      </div>
    </div>
  );

}

export default MainContainer;
