import './App.css';
import Feed from './components/feed';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="main"> 
          <Switch>
            <Route exact path="/">
              <Feed />
            </Route>
            <Route path="/dashboard">
              <h1>hi</h1>
            </Route>
          </Switch>
        </div>
      </Router> 
  );
}

export default App;
