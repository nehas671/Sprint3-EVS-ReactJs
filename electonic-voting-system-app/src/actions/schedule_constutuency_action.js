import axios from 'axios';
let viewScheduleConstituencyAction = (constituency) => {
    return async function (dispatch) {
        const res = await fetch(
            `http://localhost:8080/evs/schedule/constituency/${constituency}`, {
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

export default viewScheduleConstituencyAction;
