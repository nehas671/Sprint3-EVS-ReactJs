import axios from 'axios';

let getResultElectionNameAction = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/resultelectionname"
          );
          dispatch({type: "RESULT_ELECTION_NAME", payload: res.data});
    }
}
export default  getResultElectionNameAction ;


