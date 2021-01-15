import axios from 'axios';
let getAllVoterStatusAction=()=>{
    return async function (dispatch){
        const res=await axios.get(
            "http://localhost:8080/evs/voterRequest/status"
        );
        dispatch({type:"VIEW_STATUS",payload:res.data});
    }
}
export default getAllVoterStatusAction;