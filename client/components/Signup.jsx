import React, { useState } from 'react';
/* ADD your template code anywhere but please do not delete '' */

const Signup = (props) => {
const { handleUsername, handlePassword, signup, handleSignedUp } = props;
  return (
   <div className="signup-container">
     <div className="input-container">
       <div className="usernameInputs">
        <p> Username: </p>
        <input onChange={(e) => handleUsername(e)} type="text"  />
       </div>
       <div className="passwordInputs">
        <p> Password: </p>
        <input onChange={(e) => handlePassword(e)} type="password"  />
       </div>
       <div className="signup-buttons">
         <button className="login button" onClick={handleSignedUp}>Log In</button>
         <button className="sign-up button" onClick={signup}>Submit</button>
       </div>
     </div>
   </div>
  )
}
export default Signup;