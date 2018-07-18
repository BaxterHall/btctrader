import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../actions/index.js"

class TraderBox extends React.Component {
    constructor() {
        super();
        this.state = {
            usdBank: 156.12,
            btcBank: 0,
            disabled: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.executeTrade = this.executeTrade.bind(this);
    }

    componentDidMount() {
        this.props.loadPrice();
        this.setState({
            usdBank: this.state.usdBank.toFixed(2)
        })

    }
    handleChange(e) {
        let amount = Number(e.target.value);
        
        if (amount > this.state.usdBank) {
            this.setState({
                disabled: true,
            })           
        } else {
            this.setState({
                disabled: false,
            })
            this.props.changeBid(amount);

        }
    }

    executeTrade() {
        let newBtcBalance = (this.state.btcBank + Number(this.props.btcQuote));    
        let newUsdBalance = Number((this.state.usdBank - this.props.usdSold)).toFixed(2);
        
        this.setState({
            btcBank:   newBtcBalance,
            usdBank:   newUsdBalance,
            disabled: true,
        })

    }
    render() {
        return (

            <div className="trader">
                <div className="traderInner">
                    <div className="bankBalance">
                        <p className="balance">Account Balance</p>
                        <p className="usdTitle">USD: <span className="usdBalance">{this.state.usdBank}</span></p>
                        <p className="btcTitle">BTC: <span className="btcBalance">{this.state.btcBank}</span></p>
                    </div>
                    <div className="usdTrader">
                        <form>
                            <label>
                                Trade
                            </label><br />
                            <input className="currencyType" type="text" name="USD" value="USD" readOnly/><br />
                            <input className="tradeBox" type="text" onChange={this.handleChange} placeholder="Enter your amount" />
                        </form>
                    </div>
                    <div className="btcTrader">
                        <form onSubmit={e => e.preventDefault()}>
                            <label>
                                For
                            </label><br />
                            <input className="currencyType" type="text" value="BTC"  readOnly/><br />
                            <input className="tradeBox" type="text" value={this.props.btcQuote} placeholder="Display Quote" /><br />
                            <button id="tradeBtn" type="submit" value="Trade" disabled={this.state.disabled} onClick={this.executeTrade}>Trade</button>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, actionCreators)(TraderBox);
