import axios from 'axios';

let ViewPartywiseAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8091/evs/partywise"
          );
          dispatch({type: "PARTY_WISE", payload: res.data});
    }
}

export default ViewPartywiseAction;