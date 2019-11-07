import React, { useState } from 'react';
import Donated from './Donated.jsx';
import DonationInput from './DonationInput.jsx';
const DonatedList = ({ username, isCharity, setIsCharity }) => {
  const donArr = [];
  if (isCharity) {
    for (let i = 0; i < isCharity.length; i++) {
      const currentCharity = isCharity[i]
      donArr.push(<Donated charityName={currentCharity.charityName} amount={currentCharity.amount} key={i} />);
    }
  }
  return (
    <div>
      {donArr}
      <DonationInput isCharity={isCharity} username={username} setIsCharity={setIsCharity} />
    </div>
  )
}
export default DonatedList;