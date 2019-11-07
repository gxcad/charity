import React, { useState } from 'react';
import Donated from '../components/Donated.jsx';
import DonationInput from '../components/DonationInput.jsx';

const DonatedContainer = ({ isCharity, setIsCharity }) => {
  const donArr = [];

  isCharity.forEach((obj, i) => {
    donArr.push(<Donated name={obj.name} amount={obj.donatedAmount} key={i} />);
  })

  return (

    <div>
      <div>
        {donArr}
      </div>
      <div>
        <DonationInput isCharity={isCharity} setIsCharity={setIsCharity}/>
      </div>
    </div>
    
  )
}
export default DonatedContainer;