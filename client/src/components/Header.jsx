import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <nav className="flex justify-between mx-auto max-w-6xl">
        <Link to="/" className="p-3 bg-green-200">
          Home
        </Link>
        <div className="flex gap-5">
          {user ? (
            <>
              <Link to="/talk" className="p-3 bg-blue-200">
                The Talk
              </Link>
              <Link
                onClick={() => setUser(null)}
                to="/login"
                className="p-3 bg-red-200"
              >
                Log out
              </Link>
            </>
          ) : (
            <Link to="/login" className="p-3 bg-red-200">
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
