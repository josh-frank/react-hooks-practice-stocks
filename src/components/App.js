import { useState, useEffect } from "react";
import APIUrl from "./APIUrl";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {

  const [ stocks, setStocks ] = useState( [] );
  const [ portfolio, setPortfolio ] = useState( [] );
  const [ sortAndFilter, setSortAndFilter ] = useState( { sort: "", filter: "" } );

  useEffect( () => {
    fetch( APIUrl ).then( response => response.json() ).then( setStocks );
  }, [] );

  const sortedAndFilteredStocks = stocks.filter( stock => stock.type.includes( sortAndFilter.filter ) ).sort( ( thisStock, thatStock ) => sortAndFilter.sort === "Alphabetically" ? thisStock.name.localeCompare( thatStock.name ) : sortAndFilter.sort === "Price" ? thisStock.price - thatStock.price : -1 );

  // console.log( sortedAndFilteredStocks );

  return (
    <div>
      <Header />
      <MainContainer
        allStocks={ stocks }
        portfolio={ portfolio }
        setPortfolio={ setPortfolio }
        sortAndFilter={ sortAndFilter }
        setSortAndFilter={ setSortAndFilter }
        sortedAndFilteredStocks={ sortedAndFilteredStocks }
      />
    </div>
  );

}

export default App;
