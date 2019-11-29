import React from 'react';

const InterestChild = ({
  name,
  tagLine,
  stars,
  url,
  setIsInterested,
  isInterested,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={stars}></img>
      <p>{tagLine}</p>
      <a href={url}>{url}</a>

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

export default InterestChild;