import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../actions/index.js"

const mapStateToProps = (state) => {
    return {
        btcPrice: state
    }
}

class TraderBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.executeTrade = this.executeTrade.bind(this);

        this.state = {
            usdBank: "",
            btcBank: "",
            inputValueBTC: "",
            tradeRate: "",
            lastPrice: "",
        };
        
    }
    componentDidMount() {

        this.props.loadPrice()
        this.setState({
            usdBank: 156.12,
            btcBank: 0,
            lastPrice: this.props.btcPrice
        });
        console.log(this.state.lastPrice);
    }
    handleChange() {
       
        console.log(this.state.lastPrice);
        let btcQuote = (Number(this.state.usdBank) / Number(this.state.lastPrice));
        this.setState({
            tradeRate: btcQuote,
        })
        console.log(Number(this.state.tradeRate));
    }
    executeTrade() {
        let newBtc = (this.props.usdBank / this.state.lastPrice);
        this.setState({
            btcBank: newBtc,
            usdBank: "",
        })
    }
    render() {
        return (

            <div className="trader">
                <p>Account Balance</p>
                <p>USD:{this.state.usdBank}</p>
                <p>BTC:{this.state.btcBank}</p>
                <div className="usdTrader">
                    <form>
                        <label>
                            Trade
                                    </label><br />
                        <input type="text" name="USD" value="USD" /><br />
                        <input type="text" onChange={this.handleChange} placeholder="Enter your amount" />
                    </form>
                </div>
                <div className="btcTrader">
                    <form>
                        <label>
                            For
                                    </label><br />
                        <input type="text" value="BTC" /><br />
                        <input type="text" value={this.state.tradeRate} placeholder="Display Quote" /><br />
                        <input type="submit" value="Trade" />
                    </form>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, actionCreators)(TraderBox);