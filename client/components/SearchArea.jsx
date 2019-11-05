import CharityDisplay from './CharityDisplay.jsx';
import React, { useState } from 'react';

const handleClick = (event) => {
  console.log('event here on handleClick', event);
  // event.setAttribute
  // button that triggered will add/remove class property until it appears darkened to signify it is seleted
}

const SearchArea = ({/* INSERT PROPS HERE */ }) => {
  return (
    <div>
      <button type='submit' key='button1' class='categoryButton'>Animals</button>
      <button type='submit' key='button1' class='categoryButton'>Arts, Culture, Humanities</button>
      <button type='submit' key='button2' class='categoryButton'>Community Development</button>
      <button type='submit' key='button3' class='categoryButton'>Education</button>
      <button type='submit' key='button4' class='categoryButton'>Environment</button>
      <button type='submit' key='button5' class='categoryButton'>Health</button>
      <button type='submit' key='button6' class='categoryButton'>Human and Civil Rights</button>
      <button type='submit' key='button7' class='categoryButton'>Human Services</button>
      <button type='submit' key='button8' class='categoryButton'>International</button>
      <button type='submit' key='button9' class='categoryButton'>Research and Public Policy</button>
      <button type='submit' key='submitCategories' id='submitCategories'>Submit</button>
    </div>

  )
}
export default SearchArea;