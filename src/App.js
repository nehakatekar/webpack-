import "./App.css";
import React from "react";
import logo from "./logo.svg";
import loadable from "react-loadable";
import { Route, Link, Routes } from "react-router-dom";

const LoadingComponent = () => <h3> Loading wait..</h3>;

const Home = loadable({
  loader: () => import(/*webpackChunkNames:"HomePage"*/ "./Home"),
  loading: LoadingComponent,
});
const About = loadable({
  loader: () => import(/*webpackChunkNames:"AboutPage"*/ "./About"),
  loading: LoadingComponent,
});
function App() {
  return (
    <div className="App">
      <h1 className="error">
        <center>React+Webpack</center>
      </h1>
      <div>
        <button>
          <Link to="/home">Home</Link>
        </button>
        <button>
          <Link to="/about">About</Link>
        </button>
      </div>
      <br />

      <Routes>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Routes>

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
