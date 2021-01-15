import axios from "axios";

let viewVoterIdAction=(user_id)=>{
    return async function (dispatch){
        console.log("IN action id",user_id);
        const res=await axios.get(
            `http://localhost:8080/evs/user/voterId/${user_id}`,{
                method:"GET",
                headers:{
                    "Access-Control-Allow-Origin":"*"
                } 
            }

        ); 
       // const data =await res.json();
        //console.log("action data:",data);
        dispatch({type:"VIEW_VOTERID",payload:res.data});
    }
}
export default viewVoterIdAction;