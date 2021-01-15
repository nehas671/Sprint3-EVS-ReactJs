import axios from "axios";
let viewAllResultAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/evs/result"
          );
         
          console.log("VIEW all result  data:",res.data);
          dispatch({type: "VIEW_RESULT", payload: res.data});
    }
}

export default viewAllResultAction;