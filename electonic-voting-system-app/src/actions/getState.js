let GetStateAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:9090/evs/State"
          );
          const data = await res.json();
          console.log("getStateAction ", data);
          dispatch({type: "SHOW_STATES", payload: data});
    }
}

export default GetStateAction;