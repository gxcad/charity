import React, { useState } from 'react';
import SearchArea from '../components/SearchArea.jsx';
import SearchAreaForm from '../components/SearchAreaForm';
import SearchedCharities from '../components/SearchedCharities';
import Tabs from '../components/Tabs';
import Interests from '../components/Interests'
const Search = ({
  fetchData,
  setIsTwoLetterState,
  setIsFundraisingOrg,
  isCategory,
  setIsCategory,
  isFetchedCategoryData,
  setIsInterested,
  isInterested,
  setIsSearchNumber,
  sendInterests,
  isSearchTab,
  setisSearchTab
}) => {
  let charitiesArray
  if (isFetchedCategoryData && isFetchedCategoryData.length > 0) {
    charitiesArray = isFetchedCategoryData.map((data, index) => {
      return (<SearchedCharities
        name={data.name}
        mission={data.mission}
        url={data.url}
        tagLine={data.tagLine}
        score={data.score}
        stars={data.stars}
        categoryName={data.categoryName}
        location={data.location}
        setIsInterested={setIsInterested}
        data={data}
        isInterested={isInterested}
        index={index}
      />);
    })
  }

  return (
    <React.Fragment>
      <div className='tabs-area'>
        <Tabs
          isSearchTab={isSearchTab}
          setisSearchTab={setisSearchTab}
        />
      </div>
      <div className="search-container">
        <div id='search-area'>
          <h1>Search For a Charity</h1>
          <SearchArea
            isCategory={isCategory}
            setIsCategory={setIsCategory}
          />
          <SearchAreaForm
            setIsTwoLetterState={setIsTwoLetterState}
            setIsFundraisingOrg={setIsFundraisingOrg}
            fetchData={fetchData}
            setIsSearchNumber={setIsSearchNumber}
          />
          <div id='interests-area'>
            <Interests
              isInterested={isInterested}
              setIsInterested={setIsInterested}
              sendInterests={sendInterests}
            />
          </div>
        </div>
        <div id='array-of-categories-area'>
          <h1>Charities</h1>
          {charitiesArray ? charitiesArray : <p>Still Searching?</p>}
        </div>
      </div>
    </React.Fragment>
  )
}




export default Search;