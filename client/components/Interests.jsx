import React from 'react';
import InterestChild from './InterestChild.jsx'
const Interests = ({ isInterested, setIsInterested, sendInterests }) => {
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
      <button onClick={() => {
        // console.log('here inside of onclick for interests', isInterested)
        sendInterests(isInterested)
      }}>Save!</button>
      {interestedChildren ? interestedChildren : false}
    </div>
  )
}

export default Interests;