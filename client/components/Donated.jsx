import React from 'react';

const Donated = ({ charityName, amount }) => {
  return (
    <div className='donated-container'>
      <div className="historyElement">
        <p>Charity: {charityName}</p>
        <p>Donation: ${amount}</p>
      </div>
      <div id='share-button'>
        <button className='shareButton'>Share <strong>{charityName}</strong>!</button>
      </div>
    </div>
  )
}
export default Donated;