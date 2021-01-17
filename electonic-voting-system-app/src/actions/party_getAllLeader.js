import axios from 'axios';

let GetLeaderAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/party/leader"
          );
          //const data = await res.json();
          //console.log("getLeader ", data);
          dispatch({type: "SHOW_Leader", payload: res.data});
    }
}

export default GetLeaderAction;