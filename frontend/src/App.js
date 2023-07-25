import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Landing from "./components/LandingPage";
import Questions from "./components/Questions";
import About from "./components/About";
import ShowItem from "./components/Questions/showItem";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login" >
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/questions">
          <Questions />
        </Route>
        <Route path="/questions/:questionId">
          <ShowItem />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;