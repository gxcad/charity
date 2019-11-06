import Login from './containers/Login.jsx';
import Search from './containers/Search.jsx';
import Donations from './containers/Donations.jsx';
import React, { useState } from 'react';

const App = () => {
  const [status, setStatus] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
   fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    })

  }

  return ( 
    <div className="App">
       <Login handleUsername={handleUsernameChange} handlePassword={handlePasswordChange} login={login}/>
    </div>
  )

  
}
export default App;