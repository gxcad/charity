import React from 'react';

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
    <div className='category-area'>
      <div className="false-area">
        {falseButtons.length > 0 ? <p>Category: </p> : false}
        {falseButtons}
      </div>
      <div className="true-area">
        {trueButtons.length > 0 ? <p>Selected: </p> : false}
        {trueButtons}
      </div>
    </div>

  )
}
export default SearchArea;