import React, { useState } from 'react';
const Categories = ({
  name,
  mission,
  url,
  tagLine,
  score,
  stars,
  categoryName,
  location,
  setIsInterested,
  data,
  isInterested,
  index
}) => {
  const splitText = mission.split('<br><br>');
  const resultOfConcattingPTags = splitText.map(el => {
    return (
      <React.Fragment>
        <p>{el}</p>
      </React.Fragment>
    );
  })
  return (
    <div>
      <h1>{name}</h1>
      <h3>{categoryName}<img src={stars}></img></h3>
      <h6>{tagLine}</h6>
      {resultOfConcattingPTags}
      <a href={url}></a>
      <p>{location}</p>
      <button id={`interest-button${index}`} disabled={false} onClick={(e) => {
        // interests getting updated with a new object
        const disabledButton = document.getElementById(`interest-button${index}`);
        const newInterests = [...isInterested];
        disabledButton.disabled = true;
        newInterests.push(data);
        setIsInterested(newInterests);
      }}>Add to Interests</button>
    </div>
  );
}
export default Categories;