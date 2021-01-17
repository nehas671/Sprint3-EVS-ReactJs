import axios from 'axios';

let GetAllCandidateEmail = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/email"
          );
          dispatch({type: "CANDIDATE_EMAIL", payload: res.data});
    }
}

export default GetAllCandidateEmail;