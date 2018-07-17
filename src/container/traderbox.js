import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../actions/index.js"

class TraderBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.executeTrade = this.executeTrade.bind(this);

        this.state = {
            usdBank: this.props.usdBank,
            btcBank: this.props.btcBank,
            inputValueBTC: this.props.inputValueBTC,
            btcPrice: this.props.btcPrice,
            tradeRate: this.props.tradeRate,
            lastPrice: this.props.lastPrice,
        };
        
    }

    componentDidMount() {
        this.props.loadPrice()
        this.setState({
            usdBank: 156.12,
            btcBank: 0,
            btcPrice: this.props.btcPrice
        });
        console.log(this.props.btcPrice);
    }
    handleChange() {
       
        console.log(this.state.btcPrice);
        let btcQuote = (this.state.usdBank / this.state.btcPrice);
        this.setState({
            tradeRate: btcQuote,
        })
        console.log(this.state.btcPrice);
    }
    executeTrade() {
        let newBtc = (this.props.usdBank / this.state.btcPrice);
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

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, actionCreators)(TraderBox);