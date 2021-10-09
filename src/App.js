import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomePage from "./pages/HomePage";
import ParticlesOnScreen from "./components/ParticlesOnScreen";
import ProjectPage from "./pages/ProjectPage";
import MenuBar from "./components/MenuBar";
import AboutPage from "./pages/AboutPage";

const App = () => {
  let location = useLocation();

  return (
    <div>
      <div className="particles-container">
        <ParticlesOnScreen />
      </div>
      <div className="content-container">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="slide" timeout={500}>
            <Switch location={location}>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/projects" exact component={ProjectPage}></Route>
              <Route path="/about" exact component={AboutPage}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};
export default App;
