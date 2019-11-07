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
  //for searching data
  const [isTwoLetterState, setIsTwoLetterState] = useState('');
  const [isFundraisingOrg, setIsFundraisingOrg] = useState(false);
  const [isCategory, setIsCategory] = useState([
    { '0': false, name: 'Animals' },
    { '1': false, name: 'Arts, Culture, Humanities' },
    { '2': false, name: 'Education' },
    { '3': false, name: 'Environment' },
    { '4': false, name: 'Health' },
    { '5': false, name: 'Human Services' },
    { '6': false, name: 'International' },
    { '7': false, name: 'Human and Civil Rights' },
    { '8': false, name: 'Religion' },
    { '9': false, name: 'Community Development' },
    { '10': false, name: 'Research and Public Policy' }
  ]);
  const [isFetchedCategoryData, setIsFetchedCategoryData] = useState([]);
  const [isInterested, setIsInterested] = useState([]);
  const [isSearchNumber, setIsSearchNumber] = useState(0);

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
  const fetchData = () => {
    const fundraisingOrgs = isFundraisingOrg;
    const state = isTwoLetterState;
    const ids = [];
    const trueIndices = isCategory.map((objects, index) => {
      if (objects[index]) {
        return index + 1;
      };
    }).filter(elements => elements !== undefined);
    fetch('/api/fetchData', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({
        preferences: {
          fundraisingOrgs,
          state,
          ids: trueIndices,
          searchNumber: isSearchNumber
        }
      })
    })
      .then(res => res.json())
      .then(result => {
        //setting category data to be passed to category container
        const data = [];
        result.forEach(array => {
          array.forEach(object => {
            data.push(object);
          })
        })
        setIsFetchedCategoryData(data)
      })
      .catch(err => {
        console.log('something broke inside of .then chain inside of fetchData method')
      })
  }

  const changeToSearch = () => {
    setTab(true);
  }
  const changeToDonation = () => {
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
          {tab && <Search
            isCategory={isCategory}
            setIsCategory={setIsCategory}
            changeToSearch={changeToSearch}
            changeToDonation={changeToDonation}
            fetchData={fetchData}
            setIsTwoLetterState={setIsTwoLetterState}
            setIsFundraisingOrg={setIsFundraisingOrg}
            isFetchedCategoryData={isFetchedCategoryData}
            setIsInterested={setIsInterested}
            isInterested={isInterested}
            setIsSearchNumber={setIsSearchNumber}
          />}
        </div>
      }
    </div>
  )
}

export default App;