import React from 'react';

const Header = ({ handleLogOut, username }) => {
  return (
    <React.Fragment>
      <div className="header-container">
        <div className="left-header">
          <p className="momentum">Momentum</p>
        </div>
        <button className="logout button" onClick={handleLogOut}>Log Out</button>
      </div>
      <h3>Welcome {username}</h3>
    </React.Fragment>
  )
}

export default Header;