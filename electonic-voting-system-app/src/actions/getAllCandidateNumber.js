import axios from 'axios';

let GetAllCandidateNumber = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/number"
          );
          dispatch({type: "CANDIDATE_NUMBER", payload: res.data});
    }
}

export default GetAllCandidateNumber;