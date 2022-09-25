import logo from "./logo.svg";
import "./App.css";
import Login from "./components/identification/Login";
import Signup from "./components/identification/Signup";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import Header from "./components/navbar/Header";
import Footer from "./components/navbar/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Profile />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
