import axios from 'axios';
let viewScheduleStateAction = (state) => {
    return async function (dispatch) {
        const res = await fetch(
            `http://localhost:8080/evs/schedule/state/${state}`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
          );
          const data = await res.json();
          dispatch({type: "VIEW_SCHEDULE_STATE", payload: data});
    }
}

export default viewScheduleStateAction;
