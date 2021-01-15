import axios from 'axios';
let viewScheduleAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:9090/evs/schedule"
          );
          const data = await res.json();
          dispatch({type: "VIEW_SCHEDULE", payload: data});
    }
}

export default viewScheduleAction;