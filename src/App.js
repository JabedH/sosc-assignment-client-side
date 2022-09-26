import logo from "./logo.svg";
import "./App.css";
import Login from "./components/identification/Login";
import Signup from "./components/identification/Signup";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/navbar/Header";
import Footer from "./components/navbar/Footer";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import Blog from "./components/blog/Blog";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import Home from "./components/Home/Home";

const queryClient = new QueryClient();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />}></Route>
          </Routes>
          {/* <Footer /> */}
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
