import Login from './containers/Login.jsx';
import Search from './containers/Search.jsx';
import Donations from './containers/Donations.jsx';
import React, { useState, useEffect } from 'react';
// import { resolveMx } from 'dns';

const App = () => {
  const [status, setStatus] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    fetch('/checkCookie')
      .then(res => res.json())
      .then(data => {
        const { isLoggedIn, username } = data;
        setIsLoggedIn(isLoggedIn);
        if (username) setUsername(username);
      })
      .catch(err => console.log(err));
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const login = () => {
    const userInfo = {
      username,
      password
    }
    console.log(userInfo);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(data => {
        const { isLoggedIn, username } = data;
        setIsLoggedIn(isLoggedIn);
        if (username) setUsername(username);
      })
      .catch(err => console.error(err));
  }

  return ( 
    <div className="App">
      {!isLoggedIn && <Login handleUsername={handleUsernameChange} handlePassword={handlePasswordChange} login={login} />}
      {isLoggedIn && 
        <div>
          <Donations />
          <Search />
        </div>
      }

    </div>
  );

  
}
export default App;