
import axios from "axios";
let deleteResultAction = (resultid)=>
{
    return async function (dispatch) {
        const res = await axios.delete(
            `http://localhost:8091/evs/result/${resultid}`
          );

          console.log("showdeleteAction ", res.data);
          dispatch({type: "DELETE_RESULT", payload: res.data});
    }
}
export default deleteResultAction ;
