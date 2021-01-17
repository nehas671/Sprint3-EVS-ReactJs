import axios from 'axios';

let showPartysAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/party"
        );
        dispatch({ type: "SHOW_PARTYS", payload: res.data });
    }
}

export default showPartysAction;




