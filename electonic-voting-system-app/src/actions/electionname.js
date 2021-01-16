
import axios from "axios";
let showElectionNameAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/castelectionname"
          );

          console.log("showElectionNameAction ", res.data);
          dispatch({type: "SHOW_ELECTION_NAME", payload: res.data});
    }
}
export default showElectionNameAction ;
