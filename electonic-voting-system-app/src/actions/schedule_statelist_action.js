import axios from 'axios';
let viewScheduleStateListAction = () => {
    console.log("state list:");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/schedule/statelist"
          );
         
          dispatch({type: "VIEW_SCHEDULE_STATE_LIST", payload: res.data});
    }
}

export default viewScheduleStateListAction;