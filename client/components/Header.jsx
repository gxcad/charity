import React from 'react';

const Header = ({handleLogOut}) => {
  return (
    <div className="header-container">
      <div className="left-header">
        <p className="logo">LOGO</p>
        <p className="momentum">Momentum</p>
      </div>
      <button className="logout button" onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Header;