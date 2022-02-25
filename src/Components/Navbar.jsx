import React, { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="flex text-white justify-between">
      <img src={require("../images/homejam.png")} alt="" />
      <ul className="flex gap-10 items-center">
        <li className="">
          <span className="bi bi-search flex items-center gap-3">
          <a href="/" className="hidden md:flex">
              Search
            </a>
          </span>
        </li>
        <li className="hidden md:block">
          <a href="/">Help</a>
        </li>
        <li className="hidden md:block">
          <a href="/">Account</a>
        </li>
        <li>
          <a href="/">
            <img src={require("../images/icons/shopbag.png")} alt="" />
          </a>
        </li>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden"
        >
          <i className="bi bi-list"></i>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
