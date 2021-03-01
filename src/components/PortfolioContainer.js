import React from "react";
import Stock from "./Stock";

function PortfolioContainer( { portfolio, setPortfolio } ) {

  function removeFromPortfolio( stockId ) {
    const updatedPortfolio = portfolio.filter( portfolioStock => portfolioStock.id !== stockId );
    setPortfolio( updatedPortfolio );
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      { portfolio.map( stock => <Stock key={ stock.id } stock={ stock } portfolio={ portfolio } setPortfolio={ setPortfolio } clickCallback={ removeFromPortfolio }/> ) }
    </div>
  );

}

export default PortfolioContainer;
