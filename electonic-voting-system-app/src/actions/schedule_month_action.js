import axios from 'axios';
let viewScheduleMonthAction = (month) => {
    return async function (dispatch) {
        const res = await fetch(
            `http://localhost:9090/evs/schedule/month/${month}`, {
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

export default viewScheduleMonthAction ;
