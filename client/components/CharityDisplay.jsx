import React, { useState } from 'react';
import Charity from './Charity' // is CharityDisplay supposed to render Charity?
import SearchArea from './SearchArea'
// import dbInfo from 'path'; (placeholder)

const CharityDisplay = ({
  setIsTwoLetterState,
  setIsFundraisingOrg
}) => {
  const states = ["AK - Alaska",
    "AL - Alabama",
    "AR - Arkansas",
    "AS - American Samoa",
    "AZ - Arizona",
    "CA - California",
    "CO - Colorado",
    "CT - Connecticut",
    "DC - District of Columbia",
    "DE - Delaware",
    "FL - Florida",
    "GA - Georgia",
    "GU - Guam",
    "HI - Hawaii",
    "IA - Iowa",
    "ID - Idaho",
    "IL - Illinois",
    "IN - Indiana",
    "KS - Kansas",
    "KY - Kentucky",
    "LA - Louisiana",
    "MA - Massachusetts",
    "MD - Maryland",
    "ME - Maine",
    "MI - Michigan",
    "MN - Minnesota",
    "MO - Missouri",
    "MS - Mississippi",
    "MT - Montana",
    "NC - North Carolina",
    "ND - North Dakota",
    "NE - Nebraska",
    "NH - New Hampshire",
    "NJ - New Jersey",
    "NM - New Mexico",
    "NV - Nevada",
    "NY - New York",
    "OH - Ohio",
    "OK - Oklahoma",
    "OR - Oregon",
    "PA - Pennsylvania",
    "PR - Puerto Rico",
    "RI - Rhode Island",
    "SC - South Carolina",
    "SD - South Dakota",
    "TN - Tennessee",
    "TX - Texas",
    "UT - Utah",
    "VA - Virginia",
    "VI - Virgin Islands",
    "VT - Vermont",
    "WA - Washington",
    "WI - Wisconsin",
    "WV - West Virginia",
    "WY - Wyoming"];

  const dropDownListItems = [];
  const statesToDisplay = [];

  states.forEach((stateString, i) => {
    dropDownListItems.push(<option value={stateString.slice(0, 2)} key={i}>{stateString.slice(5)}</option>)
  })

  // dbInfo.forEach((charity) => { // pseudo
  //     for (let k = 0; k < isTrueCategory.length; k += 1) {
  //       if (charity[0].categoryName === isTrueCategory[k].name) {
  //         charitiesToDisplay.push(charity);
  //       }
  //     }
  // });

  return (
    <div>
      <select onChange={(e) => {
        setIsTwoLetterState(e.target.value)
      }}>
        {dropDownListItems}
      </select>
      {statesToDisplay}
      <label>Fundraising Organization</label>
      <input type='checkbox' onChange={(e) => {
        setIsFundraisingOrg(e.target.checked)
      }} />
    </div>
  )
}

export default CharityDisplay;