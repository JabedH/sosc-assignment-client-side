import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const HandleLogout = () => {
    signOut(auth);
  };
  return (
    <div className="">
      <div className="navbar bg-neutral ">
        <div className="flex-1">
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl text-white">
              User Identification
            </a>
          </Link>
        </div>
        <div className="flex-none">
          <Link to="/blog">
            <a className=" btn text-white">Blog</a>
          </Link>
          <li>
            <a className="btn text-white">
              {user ? (
                <Link onClick={() => HandleLogout()} to="/login">
                  Logout
                </Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
