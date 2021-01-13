import axios from 'axios';

let showElectionAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8080/evs/election"
          );
          //const data = await res.json();
          //console.log("election data:",data);
          dispatch({type: "SHOW_ELECTION", payload: res.data});
    }
}

export default showElectionAction;
