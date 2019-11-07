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
  const [tab, setTab] = useState(false);
  const [isCharity, setIsCharity] = useState([]);

  useEffect(() => {
    console.log('before fetch', username)
    let tempLoggedInBoolean;
    fetch('/checkCookie')
      .then(res => res.json())
      .then((data) => {
        const { isLoggedIn, username, allDonations } = data;
        console.log(isLoggedIn, username, allDonations)
        setIsLoggedIn(isLoggedIn);
        setUsername(username);
        setIsCharity(allDonations);
      })
      .catch(err => console.log(err));
  }, []);


        // fetch('/getdonations', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({username}),
        // })
        // .then(res => res.json())
        // .then(data => {
        //   const { allDonations } = data;
        //   if (username) setUsername(username);
        //   setIsLoggedIn(tempLoggedInBoolean);
        //   // console.log('donations data is', data)
        //   if (!data) return;
        // })
        // .catch(err => console.log(err))

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
      headers: {
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
  //fetching data using a post request, sending user input as body
  const fetchData = (fundraisingOrgs, state, ids) => {
    fetch('/api/fetchData', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({
        fundraisingOrgs, state, ids
      })
    })
      .then(res => res.json())
      .then(result => {
        console.log('here inside of response from server', result)
      })
      .catch(err => {
        console.log('something broke inside of .then chain inside of fetchData method')
      })
  }

  const changeToSearch = () => {
    console.log('search');
    setTab(true);
  }
  const changeToDonation = () => {
    console.log('donation');
    setTab(false);
  }
  

  return (
    <div className="App">
      {!isLoggedIn && signedUp && <Login handleUsername={handleUsernameChange} handlePassword={handlePasswordChange} login={loginSignup} handleSignedUp={handleSignedUp} />}
      {!isLoggedIn && !signedUp && <Signup handleUsername={handleUsernameChange} handlePassword={handlePasswordChange} signup={loginSignup} handleSignedUp={handleSignedUp} />}
      {isLoggedIn && signedUp &&
        <div className="main-container">

          <Header handleLogOut={handleLogOut}/>
          {tab && <Search changeToSearch={changeToSearch} changeToDonation={changeToDonation}/>}
          {!tab && 
          <Donations
            username={username} 
            changeToSearch={changeToSearch}
            changeToDonation={changeToDonation}
            isCharity={isCharity}
            setIsCharity={setIsCharity}
            /> }
        </div>
      }
    </div>
   )
}

export default App;