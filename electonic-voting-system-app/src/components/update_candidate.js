import { Container } from "react-bootstrap";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import Header from "./header";
import Slogan from "./slogan";
import Aside from "./aside";
import Footer from "./footer";
import { useRef } from 'react';
import AdminHeader from "./adminheader";
import UpdateCandidateAction from '../actions/update_candidate';





let candidateNameRef;
let candidateAddressRef;
let candidateAgeRef;
let candidateContactRef;
let candidateEmailRef;
let dispatch;


const UpdateCandidate = (props) => {
  candidateNameRef = useRef(null);
  candidateAddressRef = useRef(null);
  candidateAgeRef = useRef(null);
  candidateContactRef = useRef(null);
  candidateEmailRef = useRef(null);
  dispatch = useDispatch();


    
  return (
    <div>
    <AdminHeader/>

    <main>
    <Slogan/>
 
    <section class="Custom-container technology-container">
             <div class="row mx-0 px-sm-0 mb-4">
                 <div class="col-8  pl-0 pr-5">
                 <div class="col-12 border border-dark p-5 ml-auto mr-auto bg-light">
         <h3 align='center'>Edit Candidate Details</h3>
         <form >
             
             <div class="form-group row ">
             <label for="candidateName" class="col-4 col-form-label font-weight-bold">Candidate Name :</label>
             <div class="col-8">
         <input type="text"  class="form-control" id="candidateName" name="candidateName" ref={candidateNameRef} onBlur={validateCandidateName} required></input>
         <small id="namevalid" class="form-text text-danger invalid-feedback">
         Candidate name should only contain character between 3 to 10
        </small>
     </div>
     </div>
 
     <div class="form-group row ">
             <label for="address" class="col-4 col-form-label font-weight-bold">Address :</label>
             <div class="col-8">
         <textarea  class="form-control" id="address" name="address"  ref={candidateAgeRef}  onBlur={validateCandidateAddress} required></textarea>
         <small id="addressvalid" class="form-text text-danger invalid-feedback">
         Address should contain at least 3 characters 
        </small>
     </div>
     </div>
 
     <div class="form-group row ">
             <label for="age" class="col-4 col-form-label font-weight-bold">Age :</label>
             <div class="col-8">
         <input type="text"  class="form-control" id="age" name="age" ref={candidateAgeRef}  onBlur={validateCandidateAge} required></input>
         <small id="agevalid" class="form-text text-danger invalid-feedback">
         Age must be greater the 25
        </small>
     </div>
     </div>
     
 
     <div class="form-group row ">
             <label for="contact_number" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
             <div class="col-8">
         <input type="text"  class="form-control" id="contact_number" name="contact_number" ref={candidateContactRef} onBlur={validateCandidateNumber} required></input>
         <small id="emailvalid" class="form-text text-danger invalid-feedback">
         Phone number should be of 10 digits only 
        </small>
     </div>
     </div>
 
     <div class="form-group row ">
             <label for="email" class="col-4 col-form-label font-weight-bold">Email :</label>
             <div class="col-8">
         <input type="text"  class="form-control" id="email" name="email" ref= {candidateEmailRef} onBlur={validateCandidateEmail} required></input>
         <small id="emailvalid" class="form-text text-danger invalid-feedback">
         Email must in hello@gmail.com format
        </small>
     </div>
     </div>
     
     <center>
             <button class="btn btn-primary" onClick={updateCandidate.bind(this, props)}>Edit</button>
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

} else {

  event.target.classList.remove('custom-valid');
  event.target.classList.add('custom-invalid');
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
   
   validateCandidateAddress = true;

} else {

  event.target.classList.remove('custom-valid');
  event.target.classList.add('custom-invalid');
  
      
      validateCandidateAddress = false;
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
   
   validateCandidateAddress = true;

} else {

  event.target.classList.remove('custom-valid');
  event.target.classList.add('custom-invalid');
  
      
      validateCandidateAddress = false;
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
   
   validateCandidateAddress = true;

} else {

  event.target.classList.remove('custom-valid');
  event.target.classList.add('custom-invalid');
  
      
      validateCandidateAddress = false;
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
   
   validateCandidateAddress = true;

} else {

  event.target.classList.remove('custom-valid');
  event.target.classList.add('custom-invalid');
  
      
      validateCandidateAddress = false;
}

}


function updateCandidate(props) {
  props.candidate.name = candidateNameRef.current.value;
  props.candidate.address = candidateAddressRef.current.value;
  props.candidate.age = candidateAgeRef.current.value;
  props.candidate.contact = candidateContactRef.current.value;
  props.candidate.email = candidateEmailRef.current.value;
  dispatch(UpdateCandidateAction(props.candidate)).then((response) => {
      props.renderViewCandidateForm();
  })
}
function getSpaces(no) {
  var spaces = '';
  for(var i=0;i<no;i++) {
      spaces += '\u00A0';
  }
  return spaces;
}



export default UpdateCandidate;