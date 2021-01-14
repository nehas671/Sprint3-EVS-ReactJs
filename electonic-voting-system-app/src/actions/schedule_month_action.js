import axios from 'axios';
let viewScheduleMonthAction = (month) => {
    return async function (dispatch) {
        const res = await fetch(
            `http://localhost:8080/evs/schedule/month/${month}`, {
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

export default viewScheduleMonthAction ;
