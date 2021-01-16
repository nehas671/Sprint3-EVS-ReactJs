import axios from "axios";

const registerUserAction = (user) => {
    console.log("Registration in action",user.name);
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:9090/evs/user",
             { 
               
                    name: user.name, 
                    district: user.district,
                    address: user.address,
                    mobile_number: user.contactNumber,
                    emailId: user.emailId,
                    dob: user.dob,
                    gender: user.gender,
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": "*"
                }
            );
           
          dispatch({type: "Register_User", payload: res.data});
    }
}

export default registerUserAction;