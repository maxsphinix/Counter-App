import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustomHook from "./pages/CustomHook";
import Reducer from "./pages/Reducer";
import PageNotFound from "./pages/PageNotFound";
import { ErrorBoundary } from "react-error-boundary";
import BuggyCounter from "./pages/BuggyCounter";

const App = () => {
  const [click, setClick] = useState(false);
  const handleIconClick = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  return (
    <Router>
      {/* <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary> */}
      <nav>
        <div>
          <ul id="navbar" className={click ? "#navbar active2" : "#navbar"}>
            <li className="links">
              <Link to="/">Custom Hook</Link>
              <Link to="/reducer">Reducer</Link>
              <Link to="/buggyCounter">BuggyCounter</Link>
            </li>
          </ul>
        </div>

        <div id="mobile" onClick={handleIconClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>

      <div>
        <Routes>
          <Route exact path="/" element={<CustomHook />}></Route>
          <Route exact path="/reducer" element={<Reducer />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route
            path="/buggyCounter"
            element={
              <ErrorBoundary>
                <BuggyCounter />
              </ErrorBoundary>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
