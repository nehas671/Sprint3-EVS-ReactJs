let addElectionAction = (election) => {
    console.log("election in action",election.election_name);
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8080/evs/election", { 
                method: "POST", 
                body: JSON.stringify({ 
                    
                    state: election.state,
                    constituency: election.constituency,
                    date:election.date,
                    election_name: election.election_name, 
                   
                }), 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          const data = await res.json();
          dispatch({type: "ADD_ELECTION", payload: data});
    }
}

export default addElectionAction;
