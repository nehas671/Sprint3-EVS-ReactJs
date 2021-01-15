import axios from "axios";

let viewVoterIdAction=(user_id)=>{
    return async function (dispatch){
        console.log("IN action id",user_id);
        
        const res=await axios.get(
            `http://localhost:9090/evs/user/voterId/${user_id}`,{
                method:"GET",
                headers:{
                    "Access-Control-Allow-Origin":"*"
                } 
               
            } 
            
        )
        .then(response=>{
            console.log("response:",response);
            dispatch({type:"VIEW_VOTERID",payload:response.data});

            
        }) .catch(error => {
            console.log("error Response:",error.response)
            console.log("data:",error.response.data.message);
            alert(error.response.data.message);
            
        });
       
       // const data =await res.json();
        //console.log("action data:",data);

    }
}
export default viewVoterIdAction;