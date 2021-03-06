import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import TraderBox from './container/traderbox.js';
import './styles/appStyles.scss';

let store = createStore(reducers, applyMiddleware(thunk))



class App extends React.Component{

  render(){
    return(

           <TraderBox handleChange={this.props.loadPrice}></TraderBox>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
