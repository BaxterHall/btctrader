import axios from "axios";

export function loadPrice(){
    return(dispatch)=>{
        return axios.get('https://api.bitfinex.com/v1/pubticker/btcusd').then((response)=>{
            dispatch(changePrice(response.data.last_price));
        })
    }
}

export function changePrice(last_price){
    return{
        type: "CHANGE_PRICE",
        lastprice: last_price
    }
}

