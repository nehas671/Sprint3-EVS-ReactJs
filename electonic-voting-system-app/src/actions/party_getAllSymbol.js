import axios from 'axios';

let GetSymbolAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/party/symbol"
          );
          //const data = await res.json();
          //console.log("getSymbol ", data);
          dispatch({type: "SHOW_Symbol", payload: res.data});
    }
}

export default GetSymbolAction;
    