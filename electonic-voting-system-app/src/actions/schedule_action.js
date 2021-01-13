import axios from 'axios';
let viewScheduleAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8080/evs/schedule/state"
          );
          const data = await res.json();
          dispatch({type: "VIEW_SCHEDULE", payload: data});
    }
}

export default viewScheduleAction;