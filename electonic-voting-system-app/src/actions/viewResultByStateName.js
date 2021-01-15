import axios from "axios";
let viewResultByStateNameAction = (state) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8091/evs/result/statename/${state}`
          );
         
          console.log("result by statename:", res.data);
          dispatch({type: "VIEW_RESULT", payload: res.data});
    }
}

export default  viewResultByStateNameAction;