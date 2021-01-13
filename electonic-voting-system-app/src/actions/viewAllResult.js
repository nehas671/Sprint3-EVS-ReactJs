let viewAllResultAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8091/evs/result"
          );
          const data = await res.json();
          console.log("VIEW all result  data:",data);
          dispatch({type: "VIEW_RESULT", payload: data});
    }
}

export default viewAllResultAction;