import axios from 'axios';

let viewByPartyNameAction = (partyname) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/evs/candidate/party/${partyname}`
            );
          
          console.log("candidate data:",res.data);
          dispatch({type: "VIEW_CANDIDATE", payload: res.data});
    }
}

export default viewByPartyNameAction;