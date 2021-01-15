import axios from "axios";

const registerUserAction = (user) => {
    console.log("Registration in action",user.name);
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:8080/evs/user",
             { 
               
                    name: user.name, 
                    district: user.district,
                    address: user.address,
                    contactNumber: user.contactNumber,
                    emailId: user.emailId,
                    dob: user.dob,
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
           
          dispatch({type: "Register_User", payload: res.data});
    }
}

export default registerUserAction;