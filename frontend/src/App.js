import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Landing from "./components/LandingPage";
import Questions from "./components/Questions";
import About from "./components/About";
import ShowItem from "./components/Questions/showItem";
import QuestionForm from "./components/Questions/questionForm";
import EditItem from "./components/Questions/editItem";
import Footer from "./components/SideBars/footer";

function App() {
  return (
    <div className="app-main-container">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Landing />
          <Footer />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/questions">
          <Questions />
          <Footer />
        </Route>
        <Route exact path="/questions/ask">
          <QuestionForm />
        </Route>
        <Route exact path="/questions/:questionId">
          <ShowItem />
          <Footer />
        </Route>
        <Route path="/questions/:questionId/edit">
          <EditItem />
        </Route>
        <Route path="/about">
          <About />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
