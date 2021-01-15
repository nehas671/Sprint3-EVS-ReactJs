import axios from "axios";
let viewResultByPartyNameAction = (party_name) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8091/evs/result/partyname/${party_name}`
              
          );
         
          console.log("result by partyname:",res.data);
          dispatch({type: "VIEW_RESULT", payload: res.data});
    }
}

export default viewResultByPartyNameAction ;