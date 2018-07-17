import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import TraderBox from './container/traderbox.js';
import './index.css';

let store = createStore(reducers, applyMiddleware(thunk))




class App extends React.Component {
    constructor() {
        super();
        this.state = {
            usdBank: [],
            btcBank: [],
            inputValueBTC: [],
            btcPrice: [],
            tradeRate: [],
            lastPrice: [],
        };
    }

    render() {
        return (
            <TraderBox
                usdBank={this.state.usdBank}
                btcBank={this.state.btcBank}
                inputValueBTC={this.state.inputValueBTC}
                btcPrice={this.state.btcPrice}
                tradeRate={this.state.tradeRate}
                lastPrice={this.state.lastPrice}

            ></TraderBox>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));