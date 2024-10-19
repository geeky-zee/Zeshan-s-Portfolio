import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
  <div className="Container" style={{padding: 0}}>
      <Nav>
       
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Services
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://www.linkedin.com/in/zeshan-haider-1a2b9a324/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
