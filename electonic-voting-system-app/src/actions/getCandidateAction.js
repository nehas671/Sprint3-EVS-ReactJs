import axios from 'axios';

let getCandidateListAction =(props)=>
{
    return async function (dispatch){
        await axios.get(
            `http://localhost:8082/evs/election/castvote/${props.electionName}/${props.state}/${props.constituency}/${props.date}`)
            .then(res=>{dispatch({type: "GET_CANDIDATE", payload: res.data})});
        }
};

export default getCandidateListAction;