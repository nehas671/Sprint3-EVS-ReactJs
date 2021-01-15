import axios from 'axios';

let GetAllElectionElectionName = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/election/electionname"
          );
          dispatch({type: "ELECTION_NAME", payload: res.data});
    }
}

export default GetAllElectionElectionName;