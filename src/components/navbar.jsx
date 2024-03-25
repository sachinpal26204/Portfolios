import React from "react";

function Navbar () {
  return (
    <>
      <div className="container nav_bar" 
      >
        <div className="left nav_item">Portfolio</div>
        <div className="right">
          <a href="#home" className="nav_item">
            Home
          </a>
          <a href="#Experience" className="nav_item">
            Experience
          </a>
          <a href="#skill" className="nav_item">
            Skills
          </a>
          <a href="#project" className="nav_item">
            Projects
          </a>
          <a href="#contact" className="nav_item">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
