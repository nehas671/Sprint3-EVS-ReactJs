import axios from 'axios';
let viewScheduleStateListAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            `http://localhost:8080/evs/schedule/state`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
          );
          const data = await res.json();
          dispatch({type: "VIEW_SCHEDULE_STATE_LIST", payload: data});
    }
}

export default viewScheduleStateListAction;
