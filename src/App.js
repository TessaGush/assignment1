import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./pages/loginView";
import HomeView from "./pages/homeView";
import PageNotFoundView from "./pages/pageNotFoundView";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="background">
        <div className="main-content">
          <Switch>
            {/* Login/Signup page - no navbar */}
            <Route exact path="/">
              <LoginView />
            </Route>

            {/* User pages - navbar present */}
            <Route exact path="/home">
              <Navbar />
              <HomeView />
            </Route>

            {/* Fallback - if none of the above routes are hit */}
            <Route>
              <PageNotFoundView />
            </Route>
          </Switch>
        </div>

        <div className="circle1" />
        <div className="circle2" />
      </div>
    </Router>
  );
}

export default App;
