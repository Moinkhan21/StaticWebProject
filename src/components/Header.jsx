import React from "react";
import Reactlogo from '../assets/react.svg'

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={Reactlogo} alt="React logo" className="react-logo" />
        <span>ReactFacts</span>
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
