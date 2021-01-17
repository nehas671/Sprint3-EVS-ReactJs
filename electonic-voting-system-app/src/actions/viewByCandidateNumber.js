import axios from 'axios';

let viewByCandidateNameAction = (number) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/evs/candidate/number/${number}`
        );

        //console.log("candidate data:",data);
        dispatch({ type: "VIEW_CANDIDATE", payload: res.data });
    }
}

export default viewByCandidateNameAction;