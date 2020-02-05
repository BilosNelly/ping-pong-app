import React, { Component } from 'react';
import NavBar from './NavBar';
import Players from './Players';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import Matches from './Matches';
import Teams from './Teams';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import pingisApp from './reducers';
import { applyMiddleware } from 'redux';

const store = createStore(pingisApp, applyMiddleware(thunk));

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <Router>
            <div className="App">
              <NavBar />
              
              <Route path="/players" component={Players}/>
              <Route path="/teams" component={Teams}/>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/leaderboard" component={Leaderboard}/>
              <Route path="/matches" component={Matches}/>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
