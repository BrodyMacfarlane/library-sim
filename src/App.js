import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './components/login';
import Browse from './components/browse';
import User from './components/user';

// COMP 42H
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* COMP 42D */}
        <HashRouter>
          <div>
            {/* COMP 42F */}
            {/* COMP 42G */}
            <Switch>
              <Route path='/' component={Login} exact />
              <Route path='/browse' component={Browse} exact />
              <Route path='/:user' component={User} exact />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
