import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage/HomePage";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
  <MuiThemeProvider>
    <HomePage />
  </MuiThemeProvider>,
  document.getElementById("root")
);
