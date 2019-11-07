import React, { useState } from 'react';
import SearchArea from '../components/SearchArea.jsx';
import CharityDisplay from '../components/CharityDisplay';
import Tabs from '../components/Tabs';



const Search = ({changeToSearch, changeToDonation}) => {
  const [isTwoLetterState, setIsTwoLetterState] = useState('');
  const [isFundraisingOrg, setIsFundraisingOrg] = useState(false);
  return (
    <div className="search-container">
      <Tabs changeToSearch={changeToSearch} changeToDonation={changeToDonation}/>
      <hr />
      <SearchArea />
      <hr />
      <CharityDisplay
        setIsTwoLetterState={setIsTwoLetterState}
        setIsFundraisingOrg={setIsFundraisingOrg} />
    </div>
  )
}
export default Search;