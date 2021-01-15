import axios from "axios";
let viewAllDeleteAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8091/evs/result"
          );
         
          console.log("VIEW all data:",res.data);
          dispatch({type: "VIEW_ALL_RESULT", payload: res.data});
    }
}

export default viewAllDeleteAction ;