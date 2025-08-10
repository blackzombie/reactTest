import React from "react";
import styles from "./App.module.css";
import Menu from "./pages/menu/Menu";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}> My Diary</div>
        <Menu />
      </header>
      <div className={styles.content}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}
