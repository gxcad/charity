import CharityDisplay from './CharityDisplay.jsx';
import React, { useState } from 'react';

const SearchArea = () => {
  const [isCategory, setIsCategory] = useState([
    { '0': false, name: 'Animals' },
    { '1': false, name: 'Arts, Culture, Humanities' },
    { '2': false, name: 'Community Development' },
    { '3': false, name: 'Education' },
    { '4': false, name: 'Environment' },
    { '5': false, name: 'Health' },
    { '6': false, name: 'Human and Civil Rights' },
    { '7': false, name: 'Human Services' },
    { '8': false, name: 'International' },
    { '9': false, name: 'Research and Public Policy' }]
  );
  const updateCategory = (index) => {
    const temp = [];
    for (let i = 0; i < isCategory.length; i += 1) {
      if (i !== index) {
        temp.push(isCategory[i]);
      } else {
        const isCategoryTemp = { ...isCategory[i] };
        isCategoryTemp[i] = !isCategoryTemp[i][i];
        temp.push(isCategoryTemp);
      }
    }
    return temp;
  }
  const falseButtons = [];
  const trueButtons = [];
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

  return (
    <div id='renderArea'>
      {falseButtons}
      <hr></hr>
      {trueButtons}
    </div>

  )
}
export default SearchArea;