import axios from 'axios';
let viewScheduleMonthAction = (month) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/evs/schedule/month/${month}`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
          );
          
          dispatch({type: "VIEW_SCHEDULE", payload: res.data});
    }
}

export default viewScheduleMonthAction ;
