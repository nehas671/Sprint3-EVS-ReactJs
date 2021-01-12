import axios from "axios";

let getCandidateListAction =(election)=>
{
    return async function (dispatch){
        const res = await axios.get(
            `http://localhost:8082/evs/election/castvote/${election.electionName}/${election.state}/${election.constituency}/${election.date}`,
            ).then((response)=>{dispatch({type:'GET_CANDIDATE', payload: response.data})}
        )
        console.log(res);

    }
};

export default getCandidateListAction;