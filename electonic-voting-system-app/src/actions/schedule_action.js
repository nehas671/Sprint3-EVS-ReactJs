import axios from 'axios';
let viewScheduleAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/schedule"
          );
          
          dispatch({type: "VIEW_SCHEDULE", payload: res.data});
    }
}

export default viewScheduleAction;