import React, { Component, unstable_Suspense as Suspense } from "react";
import { Img } from "react-async-elements";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Suspense maxDuration={300} fallback={"Loading App..."}>
        <div className="App">
          <header className="App-header">
            <Img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Suspense>
    );
  }
}

export default App;
