import React from "react";

import logo from "./logo.svg";
import style from "./app.scss";
import Button from "./components/button";
import Input from "./components/input";

const App = () => (
  <div className={style.app}>
    <div className={style.appMain}>
      <img src={logo} className={style.appLogo} alt="logo" />
      <div className={style.title}>component-library</div>
      <div><Button /></div>
      <div><Input /></div>
    </div>
  </div>
);

export default App;
