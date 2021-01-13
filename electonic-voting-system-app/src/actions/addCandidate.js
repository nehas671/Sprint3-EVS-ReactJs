let addCandidateAction = (candidate) => {
    return async function (dispatch) {
        console.log("in action",candidate.party.partyName);
        let name=candidate.party.partyName;
        let leader=candidate.party.leader;
        let symbol=candidate.party.symbol;
        const res = await fetch(
            "http://localhost:8080/evs/candidate", { 
                method: "POST", 
                body: JSON.stringify({ 
                    candidateName: candidate.candidateName, 
                    address: candidate.address,
                    age: candidate.age,
                    contact_number: candidate.contact_number,
                    email: candidate.email,
                    party: {"partyName": name, "leader": leader, 
                    "symbol": symbol}
                    
                }), 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          const data = await res.json();
          dispatch({type: "ADD_CANDIDATE", payload: data});
    }
}

export default addCandidateAction;