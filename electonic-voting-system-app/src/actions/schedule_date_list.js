import axios from 'axios';
let viewScheduleDateListAction = () => {
    console.log("state list:");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/schedule/datelist"
          );
         
          dispatch({type: "VIEW_SCHEDULE_DATE", payload: res.data});
    }
}

export default viewScheduleDateListAction;