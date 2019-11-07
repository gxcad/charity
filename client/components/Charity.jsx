import React, { useState } from 'react';

const Charity = (props) => {

  return (
    <div>
      <p>Charity Name <br />
      {props.value}
      <button>Donate</button></p>
      
    </div>

  )
}
export default Charity;