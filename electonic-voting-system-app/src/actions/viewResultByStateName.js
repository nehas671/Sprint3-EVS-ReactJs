
let viewResultByStateNameAction = (state) => {
    return async function (dispatch) {
        const res = await fetch(
            `http://localhost:8091/evs/result/statename/${state}`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
          );
          const data = await res.json();
          console.log("result by statename:",data);
          dispatch({type: "VIEW_RESULT", payload: data});
    }
}

export default  viewResultByStateNameAction;