import Login from './containers/Login.jsx';
import Signup from './components/Signup.jsx'
import Search from './containers/Search.jsx';
import Donations from './containers/Donations.jsx';
import Header from './components/Header.jsx';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isChoose, setIsChoose] = useState("login");
  const [isShared, setIsShared] = useState(0);

  const parentComponents = {login: <Login setIsChoose={setIsChoose} />, search: <Search  setChooseComp={setIsChoose}/>, donations: <Donations  setChooseComp={setIsChoose}/>};
  const displayedComponent = parentComponents[isChoose];

  const sharedHold = [<React.Fragment />, <sharedCompLog />]
  let sharing = 0;

  return (
    <div className="App">
     
      {sharedHold[isShared]}
      {displayedComponent}
   
    </div>
  )
}
export default App;

function sharedCompLog  ({}){

  return (

    <React.Fragment>
      <p> i'm inside the login component </p>
      <button onClick={ () => {
        setChooseComp("donations"); 
      }
      }>finished</button>
    </React.Fragment>

  )
}
