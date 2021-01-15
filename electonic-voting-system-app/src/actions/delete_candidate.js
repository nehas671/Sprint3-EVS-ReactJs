import axios from 'axios';

const DeleteCandidateAction = (candidateId) => {
    return async function(dispatch) {
        const res = await axios.delete(
            `http://localhost:8080/evs/deleteCandidate/${candidateId}`, { 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          console.log('Delete Candidate serverResponse: ', res.data);
          dispatch({type: "DELETE_CANDIDATE", payload: res.data});

    }
}

export default DeleteCandidateAction;
