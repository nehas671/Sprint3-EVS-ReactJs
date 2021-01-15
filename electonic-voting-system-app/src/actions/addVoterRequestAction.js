import axios from "axios";

const addVoterRequestAction = (voterRequest) => {
    console.log("Rquest in action",voterRequest.name);
    return async function (dispatch) {
        const res =  await axios.post(
            "http://localhost:8080/evs/user/voter_request", 
                { 
                    name: voterRequest.name, 
                    district: voterRequest.district,
                    constituency: voterRequest.constituency,
                    contactNumber: voterRequest.contactNumber,
                    dob: voterRequest.dob,
                    emailId: voterRequest.emailId,
                    applicationStatus:"Pending"
                }, 
                 { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
            dispatch({type: "Add_VoterRequest", payload: res.data});  
    }
}

export default addVoterRequestAction;