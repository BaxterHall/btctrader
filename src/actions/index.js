import axios from "axios";


export function loadPrice() {
    return (dispatch) => {
        return axios.get('http://localhost:3000/api')
            .then((response) => {
                dispatch(changePrice(btcInfo.last_price));
            })
    }
}

export function changePrice(last_price) {
    return {
        type: "CHANGE_PRICE",
        lastprice: last_price

    }
}

