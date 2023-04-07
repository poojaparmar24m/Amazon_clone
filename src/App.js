import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homepage from "./pages/Homepage";
import SigninPage from "./components/SignIn/SigninPage";
import Signup from "./components/SignUp/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/signin" element={<SigninPage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>

      {/* <Homepage /> */}
    </>
  );
}

export default App;
