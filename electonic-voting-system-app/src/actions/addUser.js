let addUserAction = (registerUser) => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8080/evs/user/register_user", { 
                method: "POST", 
                body: JSON.stringify({ 
                    name: registerUser.name, 
                    district: registerUser.district,
                    constituency: registerUser.address,
                    contactNumber: registerUser.contactNumber,
                    emailId: registerUser.emailId,

                }), 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          const data = await res.json();
          dispatch({type: "ADD USER", payload: data});
    }
}

export default addUserAction;