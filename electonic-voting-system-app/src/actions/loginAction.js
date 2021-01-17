import axios from "axios";

let UserLoginAction = (loginObj) => {
    
    return async function (dispatch) {
            const res = await axios.post(
                "http://localhost:9090/evs/user/login", {
                        
                        emailId : loginObj.emailId,
                        password : loginObj.password,
                        role: loginObj.role
                        
                    }, 
                    { 
                        "Content-type": "application/json; charset=UTF-8",
                        "Access-Control-Allow-Origin": "*"
                    }
            )
              console.log('Response from server'+ res.data);
              dispatch({type: "LOGIN", payload: res.data});
        
        
    }
}
export default UserLoginAction;




