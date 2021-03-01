import React from "react";
import Stock from "./Stock";

function StockContainer( { allStocks, sortedAndFilteredStocks, portfolio, setPortfolio } ) {

  function addToPortfolio( stockId ) {
    if ( !portfolio.find( portfolioStock => portfolioStock.id === stockId ) ) {
      const updatedPortfolio = [ ...portfolio ]
      updatedPortfolio.push( allStocks.find( stock => stock.id === stockId ) );
      setPortfolio( updatedPortfolio );
    }
  }

  return (
    <div>
      <h2>Stocks</h2>
      { sortedAndFilteredStocks.map( stock => <Stock key={ stock.id } stock={ stock } portfolio={ portfolio } setPortfolio={ setPortfolio } clickCallback={ addToPortfolio }/> ) }
    </div>
  );
  
}

export default StockContainer;
