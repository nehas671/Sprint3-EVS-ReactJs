import axios from 'axios';
let viewScheduleElectionNameAction = (name) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/evs/schedule/name/${name}`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
          );
          
          dispatch({type: "VIEW_SCHEDULE", payload: res.data});
    }
}

export default viewScheduleElectionNameAction;
