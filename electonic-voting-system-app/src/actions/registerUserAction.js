import axios from "axios";

const registerUserAction = (user) => {
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:8080/evs/register_user", { 
                method: "POST", 
                body: JSON.stringify({ 
                    name: user.name, 
                    district: user.district,
                    address: user.address,
                    contactNumber: user.contactNumber,
                    emailId: user.emailId,
                    dob: user.dob,
                }), 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            console.log('Register User serverResponse: ', res.data);
          dispatch({type: "Register_User", payload: res.data});
    }
}

export default registerUserAction;