import Login from './containers/Login.jsx';
import Signup from './components/Signup.jsx'
import Search from './containers/Search.jsx';
import Donations from './containers/Donations.jsx';
import Header from './components/Header.jsx';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [userStatus, setUserStatus] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signedUp, setSignedUp] = useState(true);

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

  useEffect(() => {
    if (signedUp) {
      setUserStatus('login');
    } else if (!signedUp) {
      setUserStatus('signup');
    }
  }, [signedUp])

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignedUp = () => {
    setSignedUp(!signedUp);
  };

  const handleLogOut = () => {
    const userInfo = {
      username,
      password
    }
    fetch('/logout', {
      method: 'DELETE',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(data => {
        const { isLoggedIn } = data;
        setUsername('');
        setPassword('');
        setIsLoggedIn(isLoggedIn);
      })
      .catch(err => console.error(err))
  }
  const postData = () => {
    fetch('/')
  }
  const loginSignup = () => {
    const userInfo = {
      username,
      password
    }
    fetch(`/${userStatus}`, {
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
        if (userStatus === 'signup') setSignedUp(true);
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="App">
      {!isLoggedIn && signedUp && <Login handleUsername={handleUsernameChange} handlePassword={handlePasswordChange} login={loginSignup} handleSignedUp={handleSignedUp} />}
      {!isLoggedIn && !signedUp && <Signup handleUsername={handleUsernameChange} handlePassword={handlePasswordChange} signup={loginSignup} handleSignedUp={handleSignedUp} />}
      {isLoggedIn && signedUp &&
        <div className="main-container">
          <Header handleLogOut={handleLogOut} />
          <Search />
          <Donations />
        </div>
      }
    </div>
  )
}

export default App;