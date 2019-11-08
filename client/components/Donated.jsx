import React, { useState } from 'react';


const Donated = ({ charityName, amount }) => {
  console.log('here', charityName, amount)
  return (
    <div className="historyElement">
      <p className='textWithinElement'>Charity: {charityName} Donation: {amount} </p>
      <button className='shareButton'>share</button>
    </div>
  )
}
export default Donated;