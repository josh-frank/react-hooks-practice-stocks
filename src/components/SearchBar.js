import React from "react";

function SearchBar( { sortAndFilter, setSortAndFilter } ) {

  function updateSortAndFilter( sortAndFilterChangeEvent ) {
    const updatedSortAndFilter = { ...sortAndFilter };
    updatedSortAndFilter[ sortAndFilterChangeEvent.target.name ] = sortAndFilterChangeEvent.target.value;
    setSortAndFilter( updatedSortAndFilter );
  }

  return (
    <div>
      <label>
        <input
          type="radio"
          value=""
          name="sort"
          checked={ !sortAndFilter.sort }
          onChange={ updateSortAndFilter }
        />
        No sort
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={ sortAndFilter.sort === "Alphabetically" }
          onChange={ updateSortAndFilter }
        />
        Sort Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={ sortAndFilter.sort === "Price" }
          onChange={ updateSortAndFilter }
        />
        Sort by Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select name="filter" onChange={ updateSortAndFilter }>
          <option value="">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );

}

export default SearchBar;
