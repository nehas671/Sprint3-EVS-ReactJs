import axios from 'axios';
let viewScheduleNameListAction = () => {
    console.log("state list:");
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:9090/evs/schedule/namelist"
          );
          const data = await res.json();
          dispatch({type: "VIEW_SCHEDULE_NAME", payload: data});
    }
}

export default viewScheduleNameListAction ;