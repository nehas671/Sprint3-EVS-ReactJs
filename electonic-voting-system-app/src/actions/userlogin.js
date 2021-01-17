import axios from "axios";

let UserLoginAction = (loginObj) => {
    
    return async function (dispatch) {
            const res = await axios.get(
                `http://localhost:9090/evs/user/${loginObj.emailId}/${loginObj.password}`           
                   
            );
              console.log('Response from server'+ res.data);
              dispatch({type: "USER_LOGIN", payload: res.data});
        
        
    }
}
export default UserLoginAction;