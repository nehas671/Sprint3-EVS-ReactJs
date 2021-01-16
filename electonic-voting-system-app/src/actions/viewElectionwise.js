import axios from 'axios';

let ViewElectionwiseAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/electionwise"
          );
          dispatch({type: "ELECTION_WISE", payload: res.data});
    }
}

export default ViewElectionwiseAction;