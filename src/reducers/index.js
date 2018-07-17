let defaultState={
    btcPrice:""
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_PRICE"){
        return{
            ...state,
            btcPrice:action.last_price
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;