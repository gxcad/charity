import Login from './containers/Login.jsx';
import Signup from './components/Signup.jsx'
import Search from './containers/Search.jsx';
import Donations from './containers/Donations.jsx';
import Header from './components/Header.jsx';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [userStatus, setUserStatus] = useState('login');
  const [isUserDetails, setIsUserDetails] = useState({
    username: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [tab, setTab] = useState(true);
  const [isCharity, setIsCharity] = useState([]);
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
  const handleLoginDetails = (name, value) => {
    const updatedLoginDetails = { ...isUserDetails };
    updatedLoginDetails[name] = value;
    setIsUserDetails(updatedLoginDetails);
  }
  useEffect(() => {
    const { username } = isUserDetails;
    fetch('/checkCookie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    })
      .then(res => res.json())
      .then((data) => {
        const { isLoggedIn, username, allDonations, reply } = data;
        setIsLoggedIn(isLoggedIn);
        if (username) {
          handleLoginDetails('username', username);
        }
        if (allDonations) {
          setIsCharity(allDonations);
        }
        if (reply) {
          setIsInterested(reply)
        }
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const loginOrSignupString = isSignedUp ? 'login' : 'signup';
    setUserStatus(loginOrSignupString);
  }, [isSignedUp]);

  const displaySignUpComponent = () => {
    setIsSignedUp(!isSignedUp);
  };

  const handleLogOut = () => {
    const { username, password } = isUserDetails;
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
        location.reload()
      })
      .catch(err => console.error(err))
  }
  const handleSignupOrLogin = () => {
    const { username, password } = isUserDetails;
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
        if (username) handleLoginDetails('username', username);
        // if (userStatus === 'signup') setSignedUp(true);
      })
      .catch(err => console.error(err));
  }
  //fetching data using a post request, sending user input as body
  const fetchData = () => {
    const fundraisingOrgs = isFundraisingOrg;
    const state = isTwoLetterState;
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
  const sendInterests = (interests) => {
    fetch('/interests', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ username, interests })
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          console.log('successfully sent to redis')
        }
      })
      .catch(err => {
        console.log('something broke inside of .then chain inside of sendInterests method', err)
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
      {!isLoggedIn && isSignedUp && <Login
        handleLoginDetails={handleLoginDetails}
        handleSignupOrLogin={handleSignupOrLogin}
        displaySignUpComponent={displaySignUpComponent}
      />}
      {!isLoggedIn && !isSignedUp && <Signup
        handleLoginDetails={handleLoginDetails}
        handleSignupOrLogin={handleSignupOrLogin}
      />}
      {isLoggedIn &&
        <div className="main-container">
          <Header handleLogOut={handleLogOut} />
          <h3>Welcome {isUserDetails.username}</h3>
          {!tab &&
            <Donations
              username={isUserDetails.username}
              changeToSearch={changeToSearch}
              changeToDonation={changeToDonation}
              isCharity={isCharity}
              setIsCharity={setIsCharity}
            />}
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
            sendInterests={sendInterests}
          />}
        </div>
      }
    </div>
  )
}
export default App;