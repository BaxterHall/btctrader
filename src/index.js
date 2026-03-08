import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers/index.js";
import TraderBox from './container/traderbox.js';
import './styles/appStyles.scss';

let store = createStore(reducers, applyMiddleware(thunk))

class App extends React.Component {
  render() {
    return (
      <TraderBox />
    )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
