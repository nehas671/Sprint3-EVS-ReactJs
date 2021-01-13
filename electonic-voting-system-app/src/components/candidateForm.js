import React from 'react';


import { useSelector, useDispatch } from 'react-redux';
import showPartysAction from '../actions/getParty';
import { useHistory } from "react-router-dom";


import addCandidateAction from '../actions/addCandidate';
import Candidate from '../models/candidate';




let dispatch;
let history;
let selectedPartyName;

const CandidateForm= (props) => {

    dispatch = useDispatch();
    history = useHistory();
    let partyList = useSelector(state => state.candidateReducer);

    React.useEffect(() => {
        PartyList()
    }, []);
    
    const PartyList = () => {
        dispatch(showPartysAction())
    }
    console.log("PartysList: ", partyList);
    
    return (
    <div>
        <h3 align='center'>Add Candidate</h3>
        <div class="col-6 border border-dark p-5 ml-auto mr-auto">
        <form  onSubmit={handleSubmit}>
            
            <div class="form-group row ">
            <label for="candidateName" class="col-4 col-form-label font-weight-bold">Candidate Name :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="candidateName" name="candidateName"></input>
    </div>
    </div>

    <div class="form-group row ">
            <label for="address" class="col-4 col-form-label font-weight-bold">Address :</label>
            <div class="col-8">
        <textarea  class="form-control" id="address" name="address"></textarea>
    </div>
    </div>

    <div class="form-group row ">
            <label for="age" class="col-4 col-form-label font-weight-bold">Age :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="age" name="age"></input>
    </div>
    </div>
    

    <div class="form-group row ">
            <label for="contact_number" class="col-4 col-form-label font-weight-bold">Phone Number :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="contact_number" name="contact_number"></input>
    </div>
    </div>

    <div class="form-group row ">
            <label for="email" class="col-4 col-form-label font-weight-bold">Email :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="email" name="email"></input>
    </div>
    </div>


    <div class=" form-group row">
        <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">Party Name :</label>
        <select class="form-control col-7 state" id="exampleFormControlSelect1" onChange={handleChange}>
        {renderPartys(partyList)}
    </select>
    </div>
    
    <center><button>ADD-Candidate</button></center>
  
</form>
</div>
</div>
)
};

function handleChange(event) {
    selectedPartyName = event.target.value
    console.log("selected party: ", selectedPartyName);
}

function renderPartys(partyList) {
    console.log("PartyList: ", partyList);
    return partyList.map((party, index) => {
       const { partyName, leader, symbol } = party //destructuring
       return (
        <option key={partyName} value={partyName}>{partyName}</option>
       )
    })
 };

 function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("in handle submit data:", data);
    const candidateName = data.get('candidateName');
    const address = data.get('address');
    const age = data.get('age');
    const contact_number = data.get('contact_number');
    const email = data.get('email');
    if(candidateName==='' || candidateName===null) {
        alert("Name cannot be blank");
        return;
    }
    else if(!Number(age)) {
        alert("Age must be a number");
        return;
    }
    const candidateObj = new Candidate(candidateName, address, age, contact_number, email, selectedPartyName);
    dispatch(addCandidateAction(candidateObj));
    history.push('/');
}

export default CandidateForm;
