import axios from "axios";

const addVoterRequestAction = (voterRequest) => {
    console.log("Request in action",voterRequest.name);
    return async function (dispatch) {
        const res =  await axios.post(
            "http://localhost:9090/evs/user/voter_request", 
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
                    "Content-type": "application/json; charset=UTF-8",
                     "Access-Control-Allow-Origin": "*"
                }
            );
            dispatch({type: "Add_VoterRequest", payload: res.data});  
    }
}

export default addVoterRequestAction;