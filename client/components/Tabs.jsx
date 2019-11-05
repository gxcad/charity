import React, { useState } from 'react';
import Tab from './Tab';

const Tabs = () => {

  return (
    <div>
      <Tab value='Search results:'/>
      <Tab value='History'/>
    </div>

  )
}
export default Tabs;