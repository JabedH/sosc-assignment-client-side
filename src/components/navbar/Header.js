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
      <div className="navbar bg-neutral">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-white">
            User Identification
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>
                  {user ? (
                    <Link onClick={() => HandleLogout()} to="/login">
                      Logout
                    </Link>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
