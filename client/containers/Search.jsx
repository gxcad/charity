import React, { useState } from 'react';
import SearchArea from '../components/SearchArea.jsx';
import CharityDisplay from '../components/CharityDisplay';
import Tabs from '../components/Tabs';

const Search = () => {
  return (
    <div className="search-container">
      <Tabs />
      <SearchArea />
      <CharityDisplay />
    </div>
  )
}
export default Search;