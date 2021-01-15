let viewByElectionNameAction = (electionname) => {
    return async function (dispatch) {
        const res = await fetch(
            `http://localhost:9090/evs/election/electionname/${electionname}`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
          );
          const data = await res.json();
          console.log("election data:",data);
          dispatch({type: "SHOW_ELECTION", payload: data});
    }
}

export default viewByElectionNameAction;
