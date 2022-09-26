import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Login from "../identification/Login";
import Profile from "../Profile/Profile";

const Home = () => {
  const [user] = useAuthState(auth);
  return <div>{user ? <Profile /> : <Login />} </div>;
};

export default Home;
