import React, { useState } from 'react';
/* ADD your template code anywhere but please do not delete '' */

const Login = ({setIsChoose}) => {

  return (

    <React.Fragment>
      <p> i'm inside the login component </p>
      <button onClick={ () => {
        setIsChoose("donations"); 
      }
      }>finished</button>
    </React.Fragment>

  )
}
export default Login;