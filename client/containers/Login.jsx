import React from 'react';

const Login = ({ handleLoginDetails, handleSignupOrLogin, displaySignUpComponent }) => {
  return (
    <div className="login-container">
      <div className="input-container">
        <h1>Login</h1>
        <div id='form-login'>
          <form onChange={(e) => {
            handleLoginDetails(e.target.name, e.target.value)
          }} onSubmit={(e) => {
            e.preventDefault()
            handleSignupOrLogin()
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
        </div>
        <div className="login-buttons">
          <label htmlFor='login-sign-up button'></label>
          <button idtype='submit' className="login-sign-up button" onClick={displaySignUpComponent}>Sign Up</button>
          <label htmlFor='login-log-in button'></label>
          <button className="login-log-in button" onClick={handleSignupOrLogin}>Log In</button>
        </div>
      </div>
    </div>
  )
}
export default Login;