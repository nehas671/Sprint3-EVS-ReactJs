let viewResultByPartyNameAction = (party_name) => {
    return async function (dispatch) {
        const res = await fetch(
            `http://localhost:8091/evs/result/partyname/${party_name}`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
          );
          const data = await res.json();
          console.log("result by partyname:",data);
          dispatch({type: "VIEW_RESULT", payload: data});
    }
}

export default viewResultByPartyNameAction ;