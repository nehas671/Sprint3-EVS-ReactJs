let showElectionAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8080/evs/election"
          );
          const data = await res.json();
          console.log("election data:",data);
          dispatch({type: "SHOW_ELECTION", payload: data});
    }
}

export default showElectionAction;
