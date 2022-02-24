import React from "react";

const Navbar = () => {
  return (
    <nav className="flex text-white justify-between">
      <img src={require("../images/homejam.png")} alt="" />
      <ul className="flex gap-10 items-center">
        <li>
          <a href="/">
            <span>
              <i className="bi bi-search"></i>
            </span>{" "}
            Search
          </a>
        </li>
        <li>
          <a href="/">Help</a>
        </li>
        <li>
          <a href="/">Account</a>
        </li>
        <li>
          <a href="/"><img src={require('../images/icons/shopbag.png')} alt="" /></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
