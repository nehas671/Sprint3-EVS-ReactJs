let viewCandidatesAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8080/evs/candidate"
          );
          const data = await res.json();
          dispatch({type: "VIEW_CANDIDATE", payload: data});
    }
}

export default viewCandidatesAction;