import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homepage from "./pages/Homepage";
import SigninPage from "./components/SignIn/SigninPage";
import Signup from "./components/SignUp/Signup";
import ContextApi from "./Context/ContextApi";
import Productpage from "./pages/Productpage";

function App() {
  return (
    <>
      <ContextApi>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/signin" element={<SigninPage />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/products/:id" element={<Productpage />}></Route>
          </Routes>
        </Router>
      </ContextApi>
    </>
  );
}

export default App;
