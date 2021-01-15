import axios from 'axios';

let addPartyAction = (party) => {
    console.log("party in action",party.party_name);
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:9090/evs/election/party",
             {     
                    party_name: party.party_name,
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
