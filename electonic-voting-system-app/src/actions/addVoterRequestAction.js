import axios from "axios";

const addVoterRequestAction = (voterRequest) => {
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:8080/evs/user/voter_request", { 
                method: "POST", 
                body: JSON.stringify({ 
                    name: voterRequest.name, 
                    district: voterRequest.district,
                    constituency: voterRequest.constituency,
                    contactNumber: voterRequest.contactNumber,
                    emailId: voterRequest.emailId,
                    applicationStatus:"Pending"
                }), 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            console.log('Add Voter Request serverResponse: ', res.data);
          dispatch({type: "Add_VoterRequest", payload: res.data});
    }
}

export default addVoterRequestAction;