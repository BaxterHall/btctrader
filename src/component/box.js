import React from "react"




class Box extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
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
    // componentWillMount(){
    //     this.props.loadPrice();
    // }
    componentDidMount() {

        // console.log( this.state.lastprice);
        this.setState({
            btcBank: 0,
            lastPrice: this.state.lastprice
        });
    }
    handleChange(){
        this.props.loadPrice()
        this.props.changePrice()
        let btcQuote = (this.state.usdBank/lastPrice);
        this.setState({
            tradeRate:btcQuote,
        })
    }
    executeTrade() {
        let newBtc = (this.props.usdBank/lastPrice);
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