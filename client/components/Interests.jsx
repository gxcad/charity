import React from 'react';
import InterestChild from './InterestChild.jsx'
const Interests = ({ isInterested, setIsInterested, sendInterests }) => {
  let interestedChildren;
  if (isInterested && isInterested.length > 0) {
    interestedChildren = isInterested.map((obj, i) => {
      return (<InterestChild
        key={`interest-child${i}`}
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
    <div id='interested-charities'>
      <h1>Interested Charities</h1>
      <button id='save-charities' onClick={() => {
        sendInterests(isInterested)
      }}>Save These Charities!</button>
      <div id='interests-children'>
        {interestedChildren ? interestedChildren : false}
      </div>

    </div>
  )
}

export default Interests;