import React, { useState } from 'react';
import SearchArea from '../components/SearchArea.jsx';
import CharityDisplay from '../components/CharityDisplay';
import Tabs from '../components/Tabs';

const Search = ({changeToSearch, changeToDonation}) => {
  return (
    <div className="search-container">
      <Tabs changeToSearch={changeToSearch} changeToDonation={changeToDonation}/>
      <SearchArea />
      <CharityDisplay />
    </div>
  )
}
export default Search;