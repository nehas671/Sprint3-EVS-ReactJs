/* Axios is a library that helps us make http requests to external resources. */
import axios from 'axios';

let AddCandidateAction = (candidate) => {

     /*async--a function always returns a promise 
    dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
    return async function (dispatch) {

        await axios.post(
            "http://localhost:9090/evs/candidate",
            {
                candidateName: candidate.candidateName,
                address: candidate.address,
                age: candidate.age,
                contactNumber: candidate.contactNumber,
                email: candidate.email,
                party: {
                    "partyName": candidate.party.partyName, "leader": candidate.party.leader,
                    "symbol": candidate.party.symbol
                }
            },

            {
                /* This is use to automatically convert the request body into a JavaScript object */
                "Content-type": "application/json; charset=UTF-8"
            }
        ).then(response => {

            /*Payload is a non-official, community accepted naming convention
          for the property that holds the actual data in a Redux action object */
            console.log('Add Candidate serverResponse: ', response.data);
            dispatch({ type: "ADD_CANDIDATE", payload: response.data });
        })
            .catch(
                error => {
                    console.log("error Response:", error.response)
                    console.log("data:", error.response.data.message);
                    alert(error.response.data.message);
                }
            );


    }
}

export default AddCandidateAction;


