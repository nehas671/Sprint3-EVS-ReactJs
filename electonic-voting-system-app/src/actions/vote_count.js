import axios from "axios";

let showVoteCountAction = (election_name,state_name) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8091/evs/result/${election_name}/${state_name}`
              
          );
          console.log("showResultAction ", res.data);
          dispatch({type: "SHOW_VOTECOUNT", payload: res.data});
    }
}

export default showVoteCountAction ;

