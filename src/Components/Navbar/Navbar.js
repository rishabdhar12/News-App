import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";

const Navbar = ({ setCategory }) => {
  return (
    <>
      <nav className="navbar-component">
        <Sidebar setCategory={setCategory} />
        <h1 className="news">News</h1>
      </nav>
    </>
  );
};

export default Navbar;
