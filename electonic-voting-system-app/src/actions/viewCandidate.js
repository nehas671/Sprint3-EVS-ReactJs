import axios from 'axios';

let ViewCandidatesAction  = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/candidate"
          );
          dispatch({type: "VIEW_CANDIDATE", payload: res.data});
    }
}

export default ViewCandidatesAction

