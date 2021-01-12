let showVoteCountAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8090/evs/result"
          );
          const data = await res.json();
          console.log("showResultAction ", data);
          dispatch({type: "SHOW_RESULT", payload: data});
    }
}

export default showVoteCountAction ;

