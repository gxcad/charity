import React, { useState } from 'react';
import SearchArea from '../components/SearchArea.jsx';
import CharityDisplay from '../components/CharityDisplay';
import Categories from '../components/Categories';
import Tabs from '../components/Tabs';

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
  setIsSearchNumber
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
        changeToDonation={changeToDonation} />
      <hr />
      <SearchArea
        isCategory={isCategory}
        setIsCategory={setIsCategory}
      />
      <hr />
      <CharityDisplay
        setIsTwoLetterState={setIsTwoLetterState}
        setIsFundraisingOrg={setIsFundraisingOrg}
        fetchData={fetchData}
        setIsSearchNumber={setIsSearchNumber}
      />
      {arrayOfCategories}
      <Interests
        isInterested={isInterested}
        setIsInterested={setIsInterested} />
    </div>
  )
}
const Interests = ({ isInterested, setIsInterested }) => {
  let interestedChildren;
  if (isInterested && isInterested.length > 0) {
    interestedChildren = isInterested.map((obj) => {
      return (<InterestChild
        url={obj.url}
        name={obj.name}
        tagLine={obj.tagLine}
        stars={obj.stars}
        setIsInterested={setIsInterested}
        isInterested={isInterested}
      />);
    })
  }

  return (
    <div>
      {interestedChildren ? interestedChildren : false}
    </div>
  )
}

const InterestChild = ({
  name,
  tagLine,
  stars,
  url,
  setIsInterested,
  isInterested,
  categoryName
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{tagLine}</p>
      <a src={url}>{url}</a>
      <img src={stars}></img>
      <button onClick={() => {
        const deleteAnInterest = [...isInterested];
        const newInterests = [];
        deleteAnInterest.forEach((object, index) => {
          if (object.name !== name) {
            newInterests.push(object);
          } else {
            newInterests.splice(index, 1);
          }
        })
        setIsInterested(newInterests);
      }}>I'm not interested anymore</button>
    </div>
  )
}

export default Search;