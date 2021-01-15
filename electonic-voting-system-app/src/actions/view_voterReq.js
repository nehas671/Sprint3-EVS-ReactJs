import axios from 'axios';

let ViewVoterReqAction=()=>{
    return async function(dispatch){
    const res=await axios.get(
        "http://localhost:8080/evs/admin/voterRequest"
    );
    dispatch({type:"VIEW_VOTERREQ",payload:res.data});
}
}
export default ViewVoterReqAction;