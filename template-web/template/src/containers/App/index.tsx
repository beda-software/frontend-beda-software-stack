import React from "react";

import { getWelcomeString } from "shared/lib/utils/misc";

import { Button } from "src/components/Button";

import logo from "./images/logo.svg";
import s from "./App.module.scss";

export function App() {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <img src={logo} className={s.logo} alt="logo" />
        <p>{getWelcomeString("World")}</p>
        <Button variant="primary" style={{ marginTop: 15 }}>
          Login
        </Button>
      </header>
    </div>
  );
}
