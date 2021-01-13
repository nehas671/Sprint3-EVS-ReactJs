let showStatesAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8080/evs/states"
          );
          const data = await res.json();
          console.log("showStateAction ", data);
          dispatch({type: "SHOW_STATES", payload: data});
    }
}

export default showStatesAction;