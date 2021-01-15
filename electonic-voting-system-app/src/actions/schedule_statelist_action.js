import axios from 'axios';
let viewScheduleStateListAction = () => {
    console.log("state list:");
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:9090/evs/schedule/statelist"
          );
          const data = await res.json();
          dispatch({type: "VIEW_SCHEDULE_STATE_LIST", payload: data});
    }
}

export default viewScheduleStateListAction;