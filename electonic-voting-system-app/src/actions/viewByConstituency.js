let viewByConstituencyAction = (Constituency) => {
    return async function (dispatch) {
        const res = await fetch(
            `http://localhost:8080/evs/election/constituency/${Constituency}`, {
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

export default viewByConstituencyAction;
