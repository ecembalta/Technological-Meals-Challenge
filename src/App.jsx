import "./App.css";
import Order from "./pages/Order";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
      </Switch>
    </>
  );
}

export default App;
