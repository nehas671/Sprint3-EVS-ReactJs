let addVoterRequestAction = (voterRequest) => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8080/evs/user/voter_request", { 
                method: "POST", 
                body: JSON.stringify({ 
                    name: voterRequest.name, 
                    district: voterRequest.district,
                    constituency: voterRequest.constituency,
                    contactNumber: voterRequest.contactNumber,
                    emailId: voterRequest.emailId,
                    applicationStatus:voterRequest.applicationStatus
                }), 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          const data = await res.json();
          dispatch({type: "AddVoterRequest", payload: data});
    }
}

export default addVoterRequestAction;