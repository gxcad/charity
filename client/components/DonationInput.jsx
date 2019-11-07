import React, { useState } from 'react';

const DonationInput = ({ username, isCharity, setIsCharity }) => {
  
  const [isCharityIn, setIsCharityIn] = useState('');
  const [isAmountIn, setIsAmountIn] = useState('')

  function submitting(e) {
    e.preventDefault()
    console.log('submitting donation');
    const charityList = isCharity.slice();

    const donation = { 
      username: username,
      charityName: isCharityIn, 
      amount: isAmountIn 
    };

    fetch(`/donation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(donation)
    })
      .then(res => res.json())
      .then(data => {
        const { success } = data;
        console.log(data)
        if (success) {
          console.log('success. updating state');
          setIsCharityIn('');
          setIsAmountIn('');
          charityList.push(donation)
          console.log(charityList)
          setIsCharity(charityList);
        }
      })
  }
     
  return (
    <div>
      <br />
      <form onSubmit={submitting}>
        <input name="charityInput" placeholder='charity name' value={isCharityIn} onChange={(e) => { setIsCharityIn(e.target.value) }}></input>
        <input name="amountInput" placeholder='amount donated' value={isAmountIn} onChange={(e) => setIsAmountIn(e.target.value)}></input>

        <input type="submit" value="Submit" />
      </form>

    </div>
  )
}
export default DonationInput;