let defaultState = {
    usdBank: 0,
    btcBank: 0,
    btcQuote: 0,
    btcPrice: '',

    tradeRate: 0,
    usdSold: 0,
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "CHANGE_PRICE") {
        return {
            ...state,
            btcPrice: action.last_price,
           
        }
    }
    if (action.type === "CHANGE_BID") {
            return {
                ...state,
                usdSold: action.value,
                btcQuote: action.value / state.btcPrice,

               
            }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;
