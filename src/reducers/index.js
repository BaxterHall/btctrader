let defaultState={
    btcPrice:""
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_PRICE"){
        return{
            state,
            last_price:action.last_price
        }
    } else{
        return{
            state
        }
    }
}

export default mainReducer;