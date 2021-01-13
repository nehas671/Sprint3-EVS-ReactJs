let showVoteCountAction = (election_name,state_name) => {
    return async function (dispatch) {
        const res = await fetch(
            `http://localhost:8091/evs/result/${election_name}/${state_name}`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
          );
          const data = await res.json();
          console.log("showResultAction ", data);
          dispatch({type: "SHOW_VOTECOUNT", payload: data});
    }
}

export default showVoteCountAction ;

