import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom"
import TwitchNav from "../TwitchNav/index"
import './App.css';

import StreamList from "../StreamList/index";

const store = configureStore()

function App() {
  return (
    <div>
      <TwitchNav/>
      <div className="container-fluid">
        <Provider store={store}>
          <HashRouter basename="/">
            <Route exact path="/" component={StreamList} />
          </HashRouter>
        </Provider>
      </div>
    </div>
  );
}

export default App;
