import React, { useState } from 'react';


const Tabs = ({ isSearchTab, setisSearchTab }) => {
  return (
    isSearchTab ? (
      <div className='navigate-component-tab' onClick={() => { setisSearchTab(!isSearchTab) }}>
        <p > Add & View Donations</p>
      </div>)
      : (
        <div className='navigate-component-tab' onClick={() => { setisSearchTab(!isSearchTab) }}>
          <p>Search more charities!</p>
        </div>)
  )
}
export default Tabs;
