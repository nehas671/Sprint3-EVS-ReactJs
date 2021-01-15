import axios from 'axios';

let GetAllCandidateName = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8080/evs/candidatename"
          );
          dispatch({type: "CANDIDATE_NAME", payload: res.data});
    }
}

export default GetAllCandidateName;