import React, { useState } from 'react';
import CharityDisplay from './CharityDisplay';

const Donated = ({ name, amount }) => {
  console.log('here', name, amount)
  return (
    <div className="historyElement">
      <CharityDisplay className='charityDisplay'/>
      <p>Charity: {name} Donation: {amount} </p>
      <button>share</button>
    </div>
  )
}
export default Donated;