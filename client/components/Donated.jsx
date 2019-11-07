import React, { useState } from 'react';


const Donated = ({name, amount}) => {

  return (

    <div>
      <p>Charity: {name} Donation: {amount} </p>
      <button>share</button>
    </div>

  )
}
export default Donated;