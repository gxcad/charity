import React, { useState } from 'react';
import Donated from './Donated.jsx';
import DonationInput from './DonationInput.jsx';

const DonatedList = ({ isCharity, setIsCharity }) => {
  const donArr = [];
  isCharity.forEach((obj, i) => {
    donArr.push(<Donated name={obj.name} amount={obj.donatedAmount} key={i} />);
  })
  return (
    <div>
      {donArr}
      <DonationInput isCharity={isCharity} setIsCharity={setIsCharity} />
    </div>
  )
}
export default DonatedList;