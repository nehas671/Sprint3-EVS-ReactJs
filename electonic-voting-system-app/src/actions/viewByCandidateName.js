import axios from 'axios';

let viewByCandidateNameAction = (candidatename) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/evs/candidate/${candidatename}`
            );
          
          //console.log("candidate data:",data);
          dispatch({type: "VIEW_CANDIDATE", payload: res.data});
    }
}

export default viewByCandidateNameAction;
