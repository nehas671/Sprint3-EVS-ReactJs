import axios from 'axios';

let addElectionAction = (election) => {
    console.log("election in action",election.election_name);
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:9090/evs/election",
             {     
                    state: election.state,
                    constituency: election.constituency,
                    date:election.date,
                    election_name: election.election_name, 
                   
                }, 
                {
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
          
          dispatch({type: "ADD_ELECTION", payload: res.data});
    }
}

export default addElectionAction;


