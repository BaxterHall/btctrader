let defaultState = {
    usdBank: 156.12,
    btcBank: 0,
    usdBid: 0,
    btcQuote: 0,
    inputValueBTC: '',
    btcPrice: '',
    tradeRate: 0,
    lastPrice: null,
    usdSold: 0,
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "CHANGE_PRICE") {
        return {
            ...state,
            btcPrice: action.last_price
        }
    }
    if (action.type === "CHANGE_BID") {
            return {
                ...state,
                usdBid: action.value,
                btcQuote: action.value / state.btcPrice,
           
            }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;
