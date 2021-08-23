import "./App.css";
import { Blog } from "./components/Blog";
import { Route, Switch } from "react-router-dom";
import { BlogUpdated } from "./components/BlogUpdated";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/blogupdated" exact>
          <BlogUpdated />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
