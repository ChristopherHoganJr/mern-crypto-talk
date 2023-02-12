import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between mx-auto max-w-6xl">
        <Link to="/">Home</Link>
        <div className="flex gap-5">
          <Link to="/">Link 1</Link>
          <Link to="/">Link 2</Link>
          <Link to="/">Link 3</Link>
          <Link to="/">Link 4</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
