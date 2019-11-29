import React, { useState } from 'react';

const Login = ({ handleLoginDetails, login, handleSignedUp }) => {
  return (
    <div className="login-container">
      <form onChange={(e) => {
        handleLoginDetails(e.target.name, e.target.value)
      }}>
        <div className="usernameInputs">
          <label htmlFor='login-username-input-field'>Username:</label>
          <input id='login-username-input-field' name='username' type="text" />
        </div>
        <div className="passwordInputs">
          <label htmlFor='login-password-input-field'>Password:</label>
          <input id='login-password-input-field' name='password' type="password" />
        </div>
      </form>
      <div className="login-buttons">
        <label htmlFor='login-sign-up button'></label>
        <button className="login-sign-up button" onClick={handleSignedUp}>Sign In</button>
        <label htmlFor='login-log-in button'></label>
        <button className="login-log-in button" onClick={login}>Log In</button>
      </div>
    </div>
  )
}
export default Login;