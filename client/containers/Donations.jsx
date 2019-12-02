import React from 'react';
import DonatedList from '../components/DonatedList.jsx';
import DataVis from '../components/DataVis.jsx';
import Tabs from '../components/Tabs.jsx';
const Donations = ({
  isCharity,
  setIsCharity,
  username,
  isSearchTab,
  setisSearchTab,
  deleteDonation,
  editDonation
}) => {
  return (
    <React.Fragment>
      <div className='tabs-area'>
        <Tabs isSearchTab={isSearchTab} setisSearchTab={setisSearchTab} />
      </div>
      <div className='donated-container-margin-top-spacing'>
        <div className='donated-container'>
          <div className='donation-list'>
            <DonatedList
              username={username}
              isCharity={isCharity}
              setIsCharity={setIsCharity}
              deleteDonation={deleteDonation}
              editDonation={editDonation}
            />
          </div>
          <div className='data-visualizer'>
            <DataVis isCharity={isCharity} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Donations;