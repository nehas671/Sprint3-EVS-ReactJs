import axios from 'axios';
let viewScheduleStateAction = (state) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/evs/schedule/state/${state}`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
          );
          
          dispatch({type: "VIEW_SCHEDULE", payload: res.data});
    }
}

export default viewScheduleStateAction;
