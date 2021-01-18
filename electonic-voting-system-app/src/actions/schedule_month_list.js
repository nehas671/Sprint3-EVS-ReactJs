import axios from 'axios';
let viewScheduleMonthListAction = () => {
    console.log("state list:");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/schedule/monthlist"
          );
          
          dispatch({type: "VIEW_SCHEDULE_MONTH", payload: res.data});
    }
}

export default viewScheduleMonthListAction ;