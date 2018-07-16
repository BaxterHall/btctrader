import React from "react";

class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            usdBank: [],
            btcBank: [],
            inputValueBTC: [],
            btcPrice: [],
            usdTrade: []
        };

    }

    componentDidMount() {
        this.setState({
            btcBank: 0,
            usdBank: 152.16
        });
    }
    
    executeTrade() {
        this.setState({
            btcBank: "",
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
                        <input type="text" value={this.state.usdTrade} onChange={this.handleChange} placeholder="Enter your amount" />
                    </form>
                </div>
                <div className="btcTrader">
                    <form>
                        <label>
                            For
                            </label><br />
                        <input type="text" value="BTC" /><br />
                        <input type="text" value="" placeholder="Display Quote" /><br />
                        <input type="submit" value="Trade" />
                    </form>
                </div>
            </div>


        )
    }
}
export default Box