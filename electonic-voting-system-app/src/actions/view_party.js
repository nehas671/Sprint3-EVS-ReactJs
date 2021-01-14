import axios from 'axios';

let showPartyAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8080/evs/election/party"
          );
          //const data = await res.json();
          //console.log("party data:",data);
          dispatch({type: "VIEW_PARTY", payload: res.data});
    }
}

export default showPartyAction;
