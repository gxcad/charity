import React, { useState } from 'react';
import SearchArea from '../components/SearchArea.jsx';
import CharityDisplay from '../components/CharityDisplay';
import Categories from '../components/Categories';
import Tabs from '../components/Tabs';
import Interests from '../components/Interests'
const Search = ({
  changeToSearch,
  changeToDonation,
  fetchData,
  setIsTwoLetterState,
  setIsFundraisingOrg,
  isCategory,
  setIsCategory,
  isFetchedCategoryData,
  setIsInterested,
  isInterested,
  setIsSearchNumber,
  sendInterests
}) => {
  let arrayOfCategories
  if (isFetchedCategoryData && isFetchedCategoryData.length > 0) {
    arrayOfCategories = isFetchedCategoryData.map((data, index) => {
      return (<Categories
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
    <div className="search-container">
      <Tabs
        changeToSearch={changeToSearch}
        changeToDonation={changeToDonation}
      />
      <SearchArea
        isCategory={isCategory}
        setIsCategory={setIsCategory}
      />
      <CharityDisplay
        setIsTwoLetterState={setIsTwoLetterState}
        setIsFundraisingOrg={setIsFundraisingOrg}
        fetchData={fetchData}
        setIsSearchNumber={setIsSearchNumber}
      />
      {arrayOfCategories}
      <Interests
        isInterested={isInterested}
        setIsInterested={setIsInterested}
        sendInterests={sendInterests}
      />

    </div>
  )
}




export default Search;