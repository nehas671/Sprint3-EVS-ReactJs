import axios from 'axios';

let GetAllPartyName = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/partyname"
          );
          dispatch({type: "PARTY_NAME", payload: res.data});
    }
}

export default GetAllPartyName;