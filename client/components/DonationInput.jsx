import React, { useState } from 'react';

const DonationInput = ({ isCharity, setIsCharity }) => {
  const [isCharityIn, setIsCharityIn] = useState('');
  const [isAmountIn, setIsAmountIn] = useState('')


  function submitting(e) {
    e.preventDefault()
    const addArr = isCharity.slice();
    const obj = { name: isCharityIn, donatedAmount: isAmountIn };
    addArr.push(obj);
    setIsCharityIn('');
    setIsAmountIn('');
    setIsCharity(addArr);
  }
  return (

    <div>
      <br />
        
        <form onSubmit={submitting}>
          <input name="charityInput" placeholder='charity name' value={isCharityIn} onChange={(e) => {setIsCharityIn(e.target.value)}}></input>
          <input name="amountInput" placeholder='amount donated' value={isAmountIn} onChange={(e) => setIsAmountIn(e.target.value)}></input>

          <input type="submit" value="Submit"/>
        </form>
      
    </div>
  )
}
export default DonationInput;