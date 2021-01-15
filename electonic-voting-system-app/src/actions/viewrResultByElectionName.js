import axios from "axios";
let viewResultByElectionNameAction = (election_name) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8091/evs/result/electionname/${election_name}`
              
          );
          
          console.log("result by electionname:",res.data);
          dispatch({type: "VIEW_RESULT", payload: res.data});
    }
}
export default viewResultByElectionNameAction;