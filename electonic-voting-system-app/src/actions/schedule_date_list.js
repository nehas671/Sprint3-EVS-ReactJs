import axios from 'axios';
let viewScheduleDateListAction = () => {
    console.log("state list:");
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:9090/evs/schedule/datelist"
          );
          const data = await res.json();
          dispatch({type: "VIEW_SCHEDULE_DATE", payload: data});
    }
}

export default viewScheduleDateListAction;