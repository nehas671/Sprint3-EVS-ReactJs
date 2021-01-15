import axios from 'axios';

const UpdateCandidateAction = (candidateObj) => {
    return async function(dispatch) {
        const res = await axios.put(
            "http://localhost:8080/evs/updatecandidate" + candidateObj.id,
                { 
                    candidateName: candidateObj.candidateName, 
                    address: candidateObj.address,
                    age: candidateObj.age,
                    contact_number: candidateObj.contact_number, 
                    email: candidateObj.email
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
          //console.log('Update Candidate serverResponse: ', res.data);
          dispatch({type: "UPDATE_CANDIDATE", payload: res.data});

    }
}


    export default UpdateCandidateAction;