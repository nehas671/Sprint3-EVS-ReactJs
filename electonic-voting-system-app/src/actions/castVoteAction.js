import axios from 'axios';

let castVoteAction =(castVote)=>
{
    return async function(dispatch) {
        await axios.post(
            "http://localhost:8082/evs/election/castvote",
            {     
                    electionName: castVote.election_name,
                    state: castVote.state,
                    constituency: castVote.constituency,
                    date: castVote.date,
                    candidateName: castVote.candidate_name,
                    partyName: castVote.party_name,
                    voterId: castVote.voter_id

            },
            { 
                "Content-type": "application/json; charset=UTF-8"
            }
            ).then(console.log("Voted Successfully!"),(res)=>{dispatch({type: "ADD_VOTE", payload: res.data})});
        }
}

export default castVoteAction;