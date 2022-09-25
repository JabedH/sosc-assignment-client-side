import logo from "./logo.svg";
import "./App.css";
import Login from "./components/identification/Login";
import Reg from "./components/identification/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Reg />} />
      </Routes>
    </div>
  );
}

export default App;
