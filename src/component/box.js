import React from "react";

class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            usdBank: 152.16,
            btcBank: [],
            inputValueBTC: [],
            btcPrice: [],
            tradeRate: [],
            lastPrice: [],
            
        };
     
    }

    componentDidMount() {
        console.log(this.props.lastprice);
        this.setState({
            btcBank: 0,
            lastPrice: this.props.lastprice
        });
    }
    handleChange(){
        let btcQuote = this.state.usdBank * lastPrice;
        this.setState({
            tradeRate:btcQuote,
        })
    }
    executeTrade() {
        let newBtc = this.props.usdBank * lastPrice
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
                        <input type="text"  onChange={this.handleChange} placeholder="Enter your amount" />
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
export default Box