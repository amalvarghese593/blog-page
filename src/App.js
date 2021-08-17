import "./App.css";
import { Blog } from "./components/Blog";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/blog" exact>
          <Blog />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
