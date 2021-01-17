import axios from 'axios';

let viewByCandidateEmailAction = (mail) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/evs/candidate/email/${mail}`
        );

        //console.log("candidate data:",data);
        dispatch({ type: "VIEW_CANDIDATE", payload: res.data });
    }
}

export default viewByCandidateEmailAction;