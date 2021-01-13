let showStateAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8091/evs/state"
          );
          const data = await res.json();
          console.log("showStateAction ", data);
          dispatch({type: "SHOW_STATES", payload: data});
    }
}
export default showStateAction ;

