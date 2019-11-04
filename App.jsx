import Login from './client/containers/Login.jsx';
import Search from './client/containers/Search.jsx';
import Donations from './client/containers/Donations.jsx';
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