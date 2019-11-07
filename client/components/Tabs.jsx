import React, { useState } from 'react';


const Tabs = ({changeToSearch, changeToDonation}) => {

  return (
    <div className="tabs-container">
      <div className="searchtab-container" onClick={changeToSearch}>
        <p  className="search-tab" >Search</p>
      </div>
      <div className="historytab-container" onClick={changeToDonation}>
        <p className="history-tab" >Donations</p>
      </div>
    </div>
  )
}
export default Tabs;
