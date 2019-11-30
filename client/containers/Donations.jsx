import React from 'react';
import DonatedList from '../components/DonatedList.jsx';
import DataVis from '../components/DataVis.jsx';
import Tabs from '../components/Tabs.jsx';
const Donations = ({ isCharity, setIsCharity, username, changeToSearch, changeToDonation }) => {
  return (
    <React.Fragment>
      <Tabs changeToSearch={changeToSearch} changeToDonation={changeToDonation} />
      <DonatedList username={username} isCharity={isCharity} setIsCharity={setIsCharity} />
      <DataVis isCharity={isCharity} />
    </React.Fragment>
  )
}
export default Donations;