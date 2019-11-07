import React, { useState } from 'react';

import DonatedList from '../components/DonatedList.jsx';
import DataVis from '../components/DataVis.jsx';
const Donations = ({ }) => {
  const [isCharity, setIsCharity] = useState([{ name: 'test', donatedAmount: '300' }, { name: 'secondTest', donatedAmount: '1000' },
  { name: 'thirdTest', donatedAmount: '1' }]);
  return (
    <div>

      <DonatedList isCharity={isCharity} setIsCharity={setIsCharity} />

      <DataVis isCharity={isCharity} />
    </div>
  )
}
export default Donations;