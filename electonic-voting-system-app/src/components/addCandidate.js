import React from 'react';


import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import AdminHeader from './adminheader';
import Slogan from "./slogan";
import AdminAsideComponent from './adminAside';
import Footer from "./footer";

import ShowPartysAction from '../actions/getParty';
import AddCandidateAction from '../actions/addCandidate';
import ViewCandidatesAction from '../actions/viewCandidate';
import Candidate from '../models/candidate';


let dispatch;
let history;
let selectedPartyName;
let candidateList;

const AddCandidate = (props) => {


  /* dispatch-- is the method used to dispatch actions and trigger state changes to the store*/

  dispatch = useDispatch();
  history = useHistory();
  let partyList = useSelector(state => state.candidateReducer.partylist);
  candidateList = useSelector(state => state.candidateReducer.initialState);

  React.useEffect(() => {
    PartyList()
  }, []);

  React.useEffect(() => {
    CandidateList()
  }, []);

  const PartyList = () => {
    dispatch(ShowPartysAction())
  }

  const CandidateList = () => {
    dispatch(ViewCandidatesAction())
  }
  console.log("CandidateList valid: ", candidateList);


  console.log("PartyList:", partyList);
  if (!Array.isArray(partyList)) {
    partyList = [];
    console.log("Set partyList to blank array");
  }


  return (
    <div>

      <AdminHeader />

      <main>
        <Slogan />

        <section class="Custom-container technology-container">
          <div class="row mx-0 px-sm-0 mb-4">
            <div class="col-8  pl-0 pr-5">
              <div class="col-12 border border-dark p-5 ml-auto mr-auto bg-light">
                <h3 align='center'>Add Candidate</h3>
                <form onSubmit={handleSubmit} onMouseMove={EnableDisable}>

                  <div class="form-group row ">
                    <label for="candidateName" class="col-4 col-form-label font-weight-bold">Candidate Name :</label>
                    <div class="col-8">
                      <input type="text" class="form-control" id="candidateName" name="candidateName" placeholder="Enter Full Name" onBlur={validateCandidateName} required></input>
                      <small id="namevalid" class="form-text text-danger invalid-feedback">
                        Candidate name should only contain character between 3 to 10
       </small>
                    </div>
                  </div>

                  <div class="form-group row ">
                    <label for="address" class="col-4 col-form-label font-weight-bold">Address :</label>
                    <div class="col-8">
                      <textarea class="form-control" id="address" name="address" placeholder="Enter address here" onBlur={validateCandidateAddress} required></textarea>
                      <small id="addressvalid" class="form-text text-danger invalid-feedback">
                        Address should contain at least 3 characters
       </small>
                    </div>
                  </div>

                  <div class="form-group row ">
                    <label for="age" class="col-4 col-form-label font-weight-bold">Age :</label>
                    <div class="col-8">
                      <input type="text" class="form-control" id="age" name="age" placeholder="Enter age greter than 25" onBlur={validateCandidateAge} required></input>
                      <small id="agevalid" class="form-text text-danger invalid-feedback">
                        Age must be greater the 25
       </small>
                    </div>
                  </div>


                  <div class="form-group row ">
                    <label for="contact_number" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
                    <div class="col-8">
                      <input type="text" class="form-control" id="contactNumber" name="contactNumber" placeholder="eg. 9100011134" onBlur={validateCandidateNumber} required></input>
                      <small id="emailvalid" class="form-text text-danger invalid-feedback">
                        Phone number should be of 10 digits only
       </small>
                    </div>
                  </div>

                  <div class="form-group row ">
                    <label for="email" class="col-4 col-form-label font-weight-bold">Email :</label>
                    <div class="col-8">
                      <input type="text" class="form-control" id="email" name="email" placeholder="eg. hello@gmail.com" onBlur={validateCandidateEmail} required></input>
                      <small id="emailvalid" class="form-text text-danger invalid-feedback">
                        Email must in hello@gmail.com format
       </small>
                    </div>
                  </div>


                  <div class=" form-group row">
                    <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">Party Name :</label>
                    <select class="form-control col-7 state" id="exampleFormControlSelect1" onChange={handleChange} required>
                      <option>Select</option>
                      {renderPartys(partyList)}
                    </select>
                  </div>

                  <center>
                    <button class="btn btn-primary" id="btnsubmit" disabled="disabled">ADD-Candidate</button>
                  </center>

                </form>
              </div>
            </div>

            <AdminAsideComponent />

          </div>
        </section>


      </main>

      <Footer />


    </div>

  )
};


let validCandidateName = false;
let validCandidateAddress = false;
let validCandidateAge = false;
let validCandidateNumber = false;
let validCandidateEmail = false;


/*function to enable Button when all the fields of form are validated*/
function EnableDisable(event) {

  /*  The preventDefault() method cancels the event if it is cancelable,
    meaning that the default action that belongs to the event will not occur. */
  event.preventDefault();
  var btnsubmit = document.getElementById("btnsubmit");

  console.log("handle disabled called");
  console.log("validCandidateName", validCandidateName);
  console.log("validCandidateAddress", validCandidateAddress);
  console.log("validCandidateAge", validCandidateAge);
  console.log("validCandidateNumber", validCandidateNumber);
  console.log("validCandidateEmail", validCandidateEmail);

  if (validCandidateName && validCandidateAddress && validCandidateAge && validCandidateNumber && validCandidateEmail) {
    btnsubmit.disabled = false;
  }
  else {
    btnsubmit.disabled = true;
  }
}


function handleSubmit(event) {

  /*  The preventDefault() method cancels the event if it is cancelable,
    meaning that the default action that belongs to the event will not occur. */
  event.preventDefault();
  const data = new FormData(event.target);
  console.log("in handle submit data:", data);
  const candidateName = data.get('candidateName');
  const address = data.get('address');
  const age = data.get('age');
  const contactNumber = data.get('contactNumber');
  const email = data.get('email');
  const candidateObj = new Candidate(candidateName, address, age, contactNumber, email, selectedPartyName);
  dispatch(AddCandidateAction(candidateObj));
  alert("Candidate Added Succesfully");


  history.push('/add_candidate');
};


/*function to get all party name from database */
function renderPartys(partyList) {
  console.log("PartyList: ", partyList);
  return partyList.map((party, index) => {
    const { partyName, leader, symbol } = party //destructuring
    return (
      <option key={partyName} value={partyName}>{partyName}</option>
    )
  })
};

/*function to select party name from the dropdown*/
function handleChange(event) {
  selectedPartyName = event.target.value
  console.log("selected party: ", selectedPartyName);
};

/*function to validate Candidate Name*/
function validateCandidateName(event) {

  const data = event.target.value;
  console.log("target", data);

  let regex = /[a-zA-Z]{3,10}$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
  if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');

    validCandidateName = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');

    validCandidateName = false;
  }
};

/*function to validate Address*/
function validateCandidateAddress(event) {

  const data = event.target.value;
  console.log("target", data);

  let regex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
  if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');

    validCandidateAddress = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');

    validCandidateAddress = false;
  }

}

/*function to validate Age*/
function validateCandidateAge(event) {

  const data = event.target.value;
  console.log("target", data);

  let regex = /[0-9]{2}/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
  if (regex.test(str) && str != "" && data >= 24) {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');

    validCandidateAge = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');

    validCandidateAge = false;
  }

}

/*function to validate Mobile Number*/
function validateCandidateNumber(event) {

  const data = event.target.value;
  console.log("target", data);

  let regex = /^\d{10}$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
  if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');

    validCandidateNumber = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');

    validCandidateNumber = false;
  }

}

/*function to validate Email*/
function validateCandidateEmail(event) {

  const data = event.target.value;
  console.log("target", data);

  let regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
  if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');

    validCandidateEmail = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');

    validCandidateEmail = false;
  }


}


export default AddCandidate;