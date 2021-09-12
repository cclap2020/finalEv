import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav__li">
        <Link className="nav__li__a" to="/register">
          Register
        </Link>
      </li>
      <li className="nav__li">
        <Link className="nav__li__a" to="/signin">
          Sign In
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
