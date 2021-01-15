import axios from 'axios';

let addPartyAction = (party) => {
    console.log("party in action",party.partyName);
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:8080/evs/election/party",
             {     
                    partyName: party.partyName,
                    leader: party.leader,
                    symbol:party.symbol,
                   
                   
                }, 
                {
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
          
          dispatch({type: "ADD_PARTY", payload: res.data});
    }
}

export default addPartyAction;
