import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../actions/index.js"

class TraderBox extends React.Component {
    constructor() {
        super();
        this.state = {
            tradeRate: 0,
            btcBank: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.executeTrade = this.executeTrade.bind(this);
    }

    componentDidMount() {
        this.props.loadPrice();
        this.setState({
            usdBank: this.props.usdBank
        })
    }
    handleChange(e) {
        let amount = Number(e.target.value);
        if (amount > this.props.usdBank) {
            window.alert("You do not have enough funds")

        } else {
            this.props.changeBid(amount);

        }
    }

    executeTrade() {
        let newBtc = (this.props.usdBank / this.props.btcPrice);
        let newUsdBank = (this.props.usdBank - this.props.usdBid);
        console.log(this.props.usdBid)
        this.setState({
            btcBank: newBtc,
            usdBank: newUsdBank
        })
    }
    render() {
        return (

            <div className="trader">
                <div className="traderInner">
                    <p>Account Balance</p>
                    <p>USD: {this.state.usdBank}</p>
                    <p>BTC: {this.state.btcBank}</p>
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
                        <form onSubmit={e => e.preventDefault()}>
                            <label>
                                For
                        </label><br />
                            <input type="text" value="BTC" /><br />
                            <input type="text" value={this.props.btcQuote} placeholder="Display Quote" /><br />
                            <input id="tradeBtn" type="submit" value="Trade" onClick={this.executeTrade} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, actionCreators)(TraderBox);
