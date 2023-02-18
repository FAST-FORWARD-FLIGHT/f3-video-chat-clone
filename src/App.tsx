import React from "react";
import { GlobalStyle } from "./util/global-style";
import Router from "./shared/Router";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
