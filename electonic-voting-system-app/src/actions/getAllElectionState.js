import axios from 'axios';

let GetAllElectionState = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/election/statename"
          );
          dispatch({type: "STATE", payload: res.data});
    }
}

export default GetAllElectionState;