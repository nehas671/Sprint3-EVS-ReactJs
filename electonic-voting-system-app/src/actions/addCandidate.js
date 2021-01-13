let addCandidateAction = (candidate) => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8080/evs/candidate", { 
                method: "POST", 
                body: JSON.stringify({ 
                    candidateName: candidate.candidateName, 
                    address: candidate.address,
                    age: candidate.age,
                    contact_number: candidate.contact_number,
                    email: candidate.email,
                    party: {"partyName": candidate.party.partyName, "leader": candidate.party.leadre, 
                    "symbol": candidate.party.symbol}
                }), 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          const data = await res.json();
          dispatch({type: "ADD_Candidate", payload: data});
    }
}

export default addCandidateAction;