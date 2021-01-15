
import axios from "axios";
let showStateAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8091/evs/state"
          );

          console.log("showStateAction ", res.data);
          dispatch({type: "SHOW_STATES", payload: res.data});
    }
}
export default showStateAction ;
