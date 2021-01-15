import axios from 'axios';

let ViewStatewiseAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8091/evs/statewise"
          );
          dispatch({type: "STATE_WISE", payload: res.data});
    }
}

export default ViewStatewiseAction;