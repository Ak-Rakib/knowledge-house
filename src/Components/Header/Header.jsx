import React from "react";
import "./Header.css";
import profile from "../../assets/profile.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-text-logo">
        <h2>Knowledge Cafe</h2>
      </div>
      <img className="nav-profile" src={profile} alt="" />
    </div>
  );
};

export default Header;
