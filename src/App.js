import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';

import Recipes from './components/Recipes';
import RecipeForm from './components/RecipeForm';
import Search from './components/Search';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div className="app">
            <div className="app__header">
              <Header />
              <Search />
            </div>
            <RecipeForm />
            <Recipes />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
