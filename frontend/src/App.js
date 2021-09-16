import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CallPage from './components/CallPage/CallPage';
import HomePage from './components/HomePage/HomePage';
import NoMatch from './components/NoMatch/NoMatch';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/:id">
            <CallPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;