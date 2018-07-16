import React from "react";

class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            usdBank: [],
            btcBank: [],
            inputValueBTC: [],
            btcPrice: []           
            };     
    }

componentDidMount() {
    this.setState({
        btcBank: 0, 
        usdBank: 152.16
    });
}


// executeTrade(){

// }

  render(){
    return(
            <div className="App">
                <div className="trader">
                    <p>Account Balance</p>
                    <p>USD:{this.state.usdBank}</p>
                    <p>BTC:{this.state.btcBank}</p>
                    <div className="usdTrader">
                        <p>Trade</p>
                        <form>
                            <input type="text" value="USD" inputMode="none" /><br />
                            <input type="text" value=""  placeholder="Enter your amount" />
                        </form>
                    </div>
                    <div className="btcTrader">
                        <p>For</p>
                        <form>
                            <input type="text" value="BTC" inputMode="none" /><br />
                            <input type="text" value="" placeholder="Display Quote" /><br />
                            <input type="submit" value="Trade"  />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Box