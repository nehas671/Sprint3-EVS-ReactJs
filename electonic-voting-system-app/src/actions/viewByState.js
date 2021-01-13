let viewByStateAction = (state) => {
    return async function (dispatch) {
        console.log("state in action",state);
        const res = await fetch(
            `http://localhost:8080/evs/election/state/${state}`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
          );
          const data = await res.json();
          console.log("election data:",data);
          dispatch({type: "SHOW_ELECTION", payload: data});
    }
}

export default viewByStateAction;
