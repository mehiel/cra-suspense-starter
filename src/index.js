import React, { Component } from "react";
import ReactDOM from "react-dom";
import { unstable_scheduleCallback } from "scheduler";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

Component.prototype.deferSetState = function(...args) {
  unstable_scheduleCallback(() => {
    this.setState.apply(this, args);
  });
};

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.unstable_createRoot(document.getElementById("root")).render(<App />);
registerServiceWorker();
