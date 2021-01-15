import axios from 'axios';
let getAllVoterDistrictAction=()=>{
    return async function (dispatch){
        const res=await axios.get(
            "http://localhost:9090/evs/voterRequest/districts"
        );
        dispatch({type:"VIEW_DISTRICT",payload:res.data});
    }
}
export default getAllVoterDistrictAction;