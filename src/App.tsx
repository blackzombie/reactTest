import { Redirect, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Menu from "./pages/menu/Menu";
import List from "./pages/list/List";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <div className={styles.title}> My Diary</div>
      </header>
      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <Menu />
        </aside>
        <main className={styles.content}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    </div>
  );
}
