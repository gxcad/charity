import Login from './containers/Login.jsx';
import Search from './containers/Search.jsx';
import Donations from './containers/Donations.jsx';
import React, { useState } from 'react';

const App = () => {

  return (
    <div>
      <Login />
      <Search />
      <Donations />
    </div>
  )
}
export default App;