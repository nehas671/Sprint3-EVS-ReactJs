import axios from 'axios';
let viewScheduleElectionNameAction = (name) => {
    return async function (dispatch) {
        const res = await fetch(
            `http://localhost:9090/evs/schedule/name/${name}`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
          );
          const data = await res.json();
          dispatch({type: "VIEW_SCHEDULE", payload: data});
    }
}

export default viewScheduleElectionNameAction;
