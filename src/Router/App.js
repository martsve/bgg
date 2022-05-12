import React from 'react';
import './App.css';
import Configuration from '../modules/Configuration';
import CollectionPage from '../modules/Collection';
import NotFound from '../modules/ErrorPages';

import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch, NavLink  } from 'react-router-dom'
import { store } from '../store';
import HomeComponent from '../modules/HomeComponent'
import FilterCollectionComponent from '../modules/FilterCollectionComponent/FilterCollectionComponent'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav className='sm-flex'>
          <NavLink exact activeClassName='active' to="/">Home</NavLink>
          <NavLink activeClassName='active' to="/collection/">Collection</NavLink>
          <NavLink activeClassName='active' to="/config">Configuration</NavLink>
        </nav>
        <div className="Body">
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/collection" component={CollectionPage} />
            <Route path="/config" component={Configuration} />
            <Route path="/filter/:users" component={FilterCollectionComponent} />
            <Route path="/filter" component={FilterCollectionComponent} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
