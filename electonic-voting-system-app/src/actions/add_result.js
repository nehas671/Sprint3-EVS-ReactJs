let addResultAction = (election_name,state_name) => {
    console.log("result in action",election_name);
    return async function (dispatch) {
        const res = await fetch(
            `http://localhost:8091/evs/result/${election_name}/${state_name}`, { 
                method: "POST", 
                body: JSON.stringify({  
                   
                }), 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          const data = await res.json();
          dispatch({type: "ADD_RESULT", payload: data});
    }
}

export default addResultAction;
