import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Login from './components/login';
import Browse from './components/browse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Route path='/' component={Login} exact />
            <Route path='/browse' component={Browse} exact />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
