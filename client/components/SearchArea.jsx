import CharityDisplay from './CharityDisplay.jsx';
import React, { useState } from 'react';

const SearchArea = ({ isCategory, setIsCategory }) => {
  const updateCategory = (index) => {
    const temp = [];
    for (let i = 0; i < isCategory.length; i += 1) {
      if (i !== index) {
        temp.push(isCategory[i]);
      } else {
        const isCategoryTemp = { ...isCategory[i] };
        isCategoryTemp[i] = !isCategoryTemp[i];
        temp.push(isCategoryTemp);
      }
    }
    return temp;
  }
  const falseButtons = [];
  const trueButtons = [];
  if (isCategory) {
    isCategory.forEach((category, index) => {
      const button = (<button type='submit' key={'button' + index} id={'button' + index} className='categoryButton' onClick={() => {
        const newState = updateCategory(index);
        setIsCategory(newState);
      }}>{category.name}</button>)
      if (category[index]) {
        trueButtons.push(button);
      } else {
        falseButtons.push(button);
      }

    });
  }
  return (
    <div className='searchArea-container'>
      <div className="false-area">
        {falseButtons}
      </div>
      <div className="true-area">
        {trueButtons}
      </div>

    </div>

  )
}
export default SearchArea;