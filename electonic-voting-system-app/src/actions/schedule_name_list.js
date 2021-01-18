import axios from 'axios';
let viewScheduleNameListAction = () => {
    console.log("state list:");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/schedule/namelist"
          );
          
          dispatch({type: "VIEW_SCHEDULE_NAME", payload: res.data});
    }
}

export default viewScheduleNameListAction ;