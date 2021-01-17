import axios from 'axios';

let GetAllBySymbol = (symbol) => {
    console.log("in action",symbol)
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/evs/election/party/symbol/${symbol}`
            );
          
          dispatch({type: "VIEW_PARTY", payload: res.data});
    }
}

export default GetAllBySymbol;
