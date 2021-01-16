import axios from 'axios';

const ApproveRequestAction = (requestObj) => {
    console.log("Request in action",requestObj.emailId);
    return async function(dispatch) {
        const res = await axios.put(
            "http://localhost:9090/evs/voter_request" ,
                { 
                    name: requestObj.name, 
                    district: requestObj.district,
                    constituency: requestObj.constituency,
                    dob:requestObj.dob,
                    emailId:requestObj.emailId,
                    contactNumber:requestObj.contactNumber,
                     applicationStatus:requestObj.applicationStatus
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
          console.log('Request serverResponse: ', res.data);
          dispatch({type: "APPROVE_REQUEST", payload: res.data});

    }
}

export default ApproveRequestAction;
