import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Feed from './components/feed';
import Dashboard from './components/dashboard';

function App() {
  return (
      <Router>
        <div className="main"> 
          <Switch>
            <Route exact path="/">
              <Feed />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router> 
  );
}

export default App;
