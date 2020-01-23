import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Routes } from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter children={Routes} />
    </Provider>
  );
}

export default App;
