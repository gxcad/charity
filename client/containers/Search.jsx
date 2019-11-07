import React, { useState } from 'react';
import SearchArea from '../components/SearchArea.jsx';
import CharityDisplay from '../components/CharityDisplay';
import Tabs from '../components/Tabs';

const Search = () => {
  return (
    <div>
      <SearchArea />
      <hr />
      <Tabs />
      <hr />
      <CharityDisplay />
    </div>
  )
}
export default Search;