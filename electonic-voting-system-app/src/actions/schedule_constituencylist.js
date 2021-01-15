import axios from 'axios';
let viewScheduleConstituencyListAction = () => {
    console.log("state list:");
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:9090/evs/schedule/constituencylist"
          );
          const data = await res.json();
          dispatch({type: "VIEW_SCHEDULE_CONSTITUENCY", payload: data});
    }
}

export default viewScheduleConstituencyListAction;