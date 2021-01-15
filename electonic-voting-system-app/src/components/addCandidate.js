import React from 'react';

import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import ShowPartysAction from '../actions/getParty';
import { useHistory } from "react-router-dom";
import * as icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


import AddCandidateAction from '../actions/addCandidate';
import AdminHeader from './adminheader';

import Candidate from '../models/candidate';
import Header from "./header";
import Slogan from "./slogan";
import Aside from "./aside";
import Footer from "./footer";
import { Toast } from 'bootstrap';




let dispatch;
let history;
let selectedPartyName;


const AddCandidate= (props) => {

    dispatch = useDispatch();
    history = useHistory();
    let partyList = useSelector(state => state.candidateReducer);

    React.useEffect(() => {
        PartyList()
    }, []);
    
    const PartyList = () => {
        dispatch(ShowPartysAction())
    }
    console.log("PartysList: ", partyList);
    
    return (
    <div>

        <AdminHeader/>

   <main>
   <Slogan/>

   <section class="Custom-container technology-container">
            <div class="row mx-0 px-sm-0 mb-4">
                <div class="col-8  pl-0 pr-5">
                <div class="col-12 border border-dark p-5 ml-auto mr-auto bg-light">
        <h3 align='center'>Add Candidate</h3>
        <form  onSubmit={handleSubmit}>
            
            <div class="form-group row ">
            <label for="candidateName" class="col-4 col-form-label font-weight-bold">Candidate Name :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="candidateName" name="candidateName" placeholder="Enter Full Name" onBlur={validateCandidateName} required></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
        Candidate name should only contain character between 3 to 10
       </small>
    </div>
    </div>

    <div class="form-group row ">
            <label for="address" class="col-4 col-form-label font-weight-bold">Address :</label>
            <div class="col-8">
        <textarea  class="form-control" id="address" name="address" placeholder="Enter address here" onBlur={validateCandidateAddress} required></textarea>
        <small id="addressvalid" class="form-text text-danger invalid-feedback">
        Address should contain at least 3 characters 
       </small>
    </div>
    </div>

    <div class="form-group row ">
            <label for="age" class="col-4 col-form-label font-weight-bold">Age :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="age" name="age" placeholder="Enter age greter than 25" onBlur={validateCandidateAge} required></input>
        <small id="agevalid" class="form-text text-danger invalid-feedback">
        Age must be greater the 25
       </small>
    </div>
    </div>
    

    <div class="form-group row ">
            <label for="contact_number" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="contact_number" name="contact_number" placeholder="eg. 9100011134" onBlur={validateCandidateNumber} required></input>
        <small id="emailvalid" class="form-text text-danger invalid-feedback">
        Phone number should be of 10 digits only 
       </small>
    </div>
    </div>

    <div class="form-group row ">
            <label for="email" class="col-4 col-form-label font-weight-bold">Email :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="email" name="email" placeholder="eg. hello@gmail.com" onBlur={validateCandidateEmail} required></input>
        <small id="emailvalid" class="form-text text-danger invalid-feedback">
        Email must in hello@gmail.com format
       </small>
    </div>
    </div>


    <div class=" form-group row">
        <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">Party Name :</label>
        <select class="form-control col-7 state" id="exampleFormControlSelect1" onChange={handleChange} required>
        {renderPartys(partyList)}
    </select>
    </div>
    
    <center>
            <button class="btn btn-primary">ADD-Candidate</button>
    </center>
  
</form>
</div>
    </div>
            
            <Aside/>
           
            </div>
        </section>


   </main>
   
   <Footer/>

        
</div>  
        
)
};

function handleChange(event) {
    selectedPartyName = event.target.value
    console.log("selected party: ", selectedPartyName);
};

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
    const candidateObj = new Candidate(candidateName, address, age, contact_number, email, selectedPartyName);
    dispatch(AddCandidateAction(candidateObj));
    history.push('/admin_services');
};

let validCandidateName=false;
let validCandidateAddress=false;
let validCandidateAge=false;
let validCandidateNumber=false;
let validCandidateEmail=false;

function validateCandidateName(event){

    const data = event.target.value;
    console.log("target",data);
   
    let regex = /[a-zA-Z]{3,10}$/;
    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
    if (regex.test(str) && str != "") {
  
      event.target.classList.remove('custom-invalid');
      event.target.classList.add('custom-valid');

      validCandidateName=true;
  
    } else {
  
      event.target.classList.remove('custom-valid');
      event.target.classList.add('custom-invalid');

      validCandidateName=true;
    }
};

function validateCandidateAddress(event){

    const data = event.target.value;
    console.log("target",data);
   
    let regex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
    if (regex.test(str) && str != "") {
  
      event.target.classList.remove('custom-invalid');
      event.target.classList.add('custom-valid');

      validCandidateAddress=true;
  
    } else {
  
      event.target.classList.remove('custom-valid');
      event.target.classList.add('custom-invalid');

      validCandidateAddress=false;
    }

}

function validateCandidateAge(event){

    const data = event.target.value;
    console.log("target",data);
   
    let regex = /[0-9]{2}/;
    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
    if (regex.test(str) && str != "" && data>=24) {
  
      event.target.classList.remove('custom-invalid');
      event.target.classList.add('custom-valid');

      validCandidateAge=true;
  
    } else {
  
      event.target.classList.remove('custom-valid');
      event.target.classList.add('custom-invalid');

      validCandidateAge=true;
    }

}

function validateCandidateNumber(event){

    const data = event.target.value;
    console.log("target",data);
   
    let regex = /^\d{10}$/;
    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
    if (regex.test(str) && str != "") {
  
      event.target.classList.remove('custom-invalid');
      event.target.classList.add('custom-valid');

      validCandidateNumber=true;
  
    } else {
  
      event.target.classList.remove('custom-valid');
      event.target.classList.add('custom-invalid');

      validCandidateNumber=false;
    }

}

function validateCandidateEmail(event){

    const data = event.target.value;
    console.log("target",data);
   
    let regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
    if (regex.test(str) && str != "") {
  
      event.target.classList.remove('custom-invalid');
      event.target.classList.add('custom-valid');

      validCandidateEmail=true;
  
    } else {
  
      event.target.classList.remove('custom-valid');
      event.target.classList.add('custom-invalid');

      validCandidateEmail=false;
    }


}




  

export default AddCandidate;