import React, { useState } from 'react';
/* ADD your template code anywhere but please do not delete '' */

const Login = (props) => {
const {handleUsername, handlePassword, login} = props;
  return (
   <div className="login-container">
     <div className="input-container">
       <div className="usernameInputs">
        <p> Username: </p>
        <input onChange={(e) => handleUsername(e)} type="text"  />
       </div>
       <div className="passwordInputs">
        <p> Password: </p>
        <input onChange={(e) => handlePassword(e)} type="text"  />
       </div>
       <div className="login-buttons">
         <button className="sign-up">Sign Up</button>
         <button className="login" onClick={login}>Log In</button>
       </div>
     </div>
   </div>
  )
}
export default Login;