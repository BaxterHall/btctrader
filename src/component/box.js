import React from "react";

class Box extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="trader">
                    <p>Account Balance</p>
                    <p>USD: {this.state.usdBank}</p>
                    <p>BTC: {this.state.btcBank}</p>
                    <div className="usdTrader">
                        <p>Trade</p>
                        <form>
                            <input type="text" value="USD" inputMode="none" /><br />
                            <input type="text" value="" onChange={this.props.getPrice} placeholder="Enter your amount" />
                        </form>
                    </div>
                    <div className="btcTrader">
                        <p>For</p>
                        <form>
                            <input type="text" value="BTC" inputMode="none" /><br />
                            <input type="text" value={this.state.inputValueBTC} placeholder="Display Quote" /><br />
                            <input type="submit" value="Trade" onClick={this.executeTrade()} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Box