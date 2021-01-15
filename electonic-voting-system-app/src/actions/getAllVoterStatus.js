import axios from 'axios';
let getAllVoterStatusAction=()=>{
    return async function (dispatch){
        const res=await axios.get(
            "http://localhost:9090/evs/voterRequest/status"
        );
        dispatch({type:"VIEW_STATUS",payload:res.data});
    }
}
export default getAllVoterStatusAction;