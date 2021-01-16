import axios from 'axios';

const AddCandidateAction = (candidate) => {
    return async function(dispatch) {
        //let name=candidate.party.partyName;
        //let leader=candidate.party.leader;
        //let symbol=candidate.party.symbol;
        const res = await axios.post(
            "http://localhost:9090/evs/candidate",
            { 
                candidateName: candidate.candidateName, 
                address: candidate.address,
                age: candidate.age,
                contactNumber: candidate.contactNumber,
                email: candidate.email,
                party: {"partyName": candidate.party.partyName, "leader": candidate.party.leader, 
                        "symbol": candidate.party.symbol}
            },

            {
                    "Content-type": "application/json; charset=UTF-8"
            }
            );
          console.log('Add Candidate serverResponse: ', res.data);
          dispatch({type: "ADD_CANDIDATE", payload: res.data});

    }
}

export default AddCandidateAction;
