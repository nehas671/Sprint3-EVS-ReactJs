import axios from "axios";

let viewReqByStatusAction=(status)=>{
    return async function (dispatch){
        const res=await axios.get(
            `http://localhost:9090/evs/admin/voterRequestbystatus/${status}`,{
                method:"GET",
                headers:{
                    "Access-Control-Allow-Origin":"*"
                } 
            }
        );
       // const data =await res.json();
        //console.log("action data:",data);
        dispatch({type:"VIEW_VOTERREQ",payload:res.data});
    }
}
export default viewReqByStatusAction;