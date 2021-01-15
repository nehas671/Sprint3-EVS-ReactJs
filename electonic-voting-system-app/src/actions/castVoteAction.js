import axios from 'axios';

let castVoteAction =(castVote)=>
{
    return async function(dispatch) {
        await axios.post(
            "http://localhost:9090/evs/election/castvote",
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
            ).then(response=>{
                console.log("Response: ", response);
                dispatch({type: "ADD_VOTE", payload: response.data})
            })
            .catch(
                error => {
                    console.log("error Response:",error.response)
                    console.log("data:",error.response.data.message);
                    alert(error.response.data.message);
                    
                }
            );
        }
}

export default castVoteAction;