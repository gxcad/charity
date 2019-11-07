import React, { useState } from 'react';
import DonatedContainer from './DonatedContainer.jsx';
import DataVis from './DataVis.jsx';

const Donations = ({}) => {
  const [isCharity, setIsCharity] = useState([{name: 'test', donatedAmount:'300'}, {name: 'secondTest', donatedAmount:'1000'},
  {name: 'thirdTest', donatedAmount:'1'}]);

  return (

    <div>
      <div>
        <DonatedContainer isCharity={isCharity} setIsCharity={setIsCharity} />
      </div>
      <div>
        <DataVis isCharity={isCharity} />
      </div>    
    </div>

  )
}
export default Donations;