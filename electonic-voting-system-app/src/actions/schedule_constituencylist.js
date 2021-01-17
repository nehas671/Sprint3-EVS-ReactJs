import axios from 'axios';
let viewScheduleConstituencyListAction = () => {
    console.log("state list:");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/schedule/constituencylist"
          );
         
          dispatch({type: "VIEW_SCHEDULE_CONSTITUENCY", payload: res.data});
    }
}

export default viewScheduleConstituencyListAction;