import { Route, Router, Switch } from "react-router-dom";
import GifyDetails from "./pages/GifyDetails";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details">
          <GifyDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
