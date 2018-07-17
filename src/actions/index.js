import axios from "axios";


export function loadPrice() {
    return (dispatch) => {
        return axios.get('http://localhost:3000/api')
            .then((response) => {
                console.log(response.data.last_price)
                dispatch(changePrice(response.data.last_price));
            })
    }
}

export function changeBid(amount){
  return {
    type: "CHANGE_BID",
    value: amount
  }
}

export function changePrice(last_price) {
    return {
        type: "CHANGE_PRICE",
        last_price: last_price
    }
}
