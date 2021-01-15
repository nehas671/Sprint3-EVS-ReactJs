import axios from 'axios';
let viewScheduleMonthListAction = () => {
    console.log("state list:");
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:9090/evs/schedule/monthlist"
          );
          const data = await res.json();
          dispatch({type: "VIEW_SCHEDULE_MONTH", payload: data});
    }
}

export default viewScheduleMonthListAction ;