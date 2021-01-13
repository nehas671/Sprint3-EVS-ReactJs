import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import VoterRequest from '../models/VoterRequest';


let dispatch;
let selectedDistrict;

const AddRequest = (props) => {
   
    dispatch = useDispatch();
   

    const addVoterRequest = ()=>{
        
    }
    return (
    <div>
    <div>
    
    <main>
        <div class="jumbotron sky-color jumbotron-custom mb-0 px-sm-0 rounded-0">
        <div class="col-6 border border-dark p-5 ml-auto mr-auto">
        <h2>Add Voter Request</h2>
        <br></br>
        <form>
            <div class="form-group row ">
            <label for="Name" class="col-4 col-form-label font-weight-bold">Name :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="Name" onBlur={validateUserName} required></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
            Name should only contain characters
       </small>
    </div>
    </div>
    

    <div class="form-group row ">
            <label for="contactNumber" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="contactNumber" onBlur={validateMobileNumber} required></input>
        <small id="numbervalid" class="form-text text-danger invalid-feedback">
            Number should only contain 10 digits
       </small>
   </div>
    </div>

    <div class="form-group row ">
            <label for="emailId" class="col-4 col-form-label font-weight-bold">Email Id :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="emailId" onBlur={validateEmailId} required></input>
        <small id="numbervalid" class="form-text text-danger invalid-feedback">
            Email Id should be in proper format
       </small>
    </div>
    </div>

    <div class="form-group row ">
            <label for="Constituency" class="col-4 col-form-label font-weight-bold">Constituency :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="Constituency" onBlur={validateConstiuency} required></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
            Constituency should only contain characters
       </small>
    </div>
    </div>

    <div class="form-group row">
    <label for="dob" class="col-4 col-form-label mr-3 font-weight-bold">Date Of Birth :</label>
    <input type="date" id="dob" name="dob" class="col-4 " onBlur={validateDate} required></input>
    <small id="namevalid" class="form-text text-danger invalid-feedback">
                Date of Birth should be less than the current Date
        </small>
      </div>


    <div class=" form-group row">
        <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">District :</label>
        <select class="form-control col-7 state" id="exampleFormControlSelect1" onChange={handleChange} required>
           {/*renderDistrict(districtList)*/} 
           <option>Ambikapur</option>
           <option>Surguja</option>
           <option>Surajpur</option>
           <option>Balrampur</option>
    </select>
    </div>
    
    <Button variant="primary" name="add" value="ADD VOTER REQUEST" onClick={addVoterRequest}>ADD VOTER REQUEST</Button>
  
</form>
        </div>
        
</div>
</main>
            
</div>


</div>
)
};


let validUsername=false;
let validNumber=false;
let validEmailId=false;
let validConstituency=false;
let validDate=false;

function validateUserName(event) {
    
    const data = event.target.value;
  console.log("target",data);
 
  let regex = /[a-zA-Z]{3,15}$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
   if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');
     // valid(username);
     validUsername = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    
        // inputRequired(username, str);
        validUsername = false;


  }
}
function validateMobileNumber(event) {
    const data = event.target.value;
    console.log("target",data);
    let regex = /\d{10}$/;

    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
    if (regex.test(str) && str != "") {
   
       event.target.classList.remove('custom-invalid');
       event.target.classList.add('custom-valid');
        // valid(username);
        validNumber = true;
   } 
    else {
   
       event.target.classList.remove('custom-valid');
       event.target.classList.add('custom-invalid');
       
           // inputRequired(username, str);
           validNumber = false;
   
   
     }
}

function validateEmailId(event) {
    const data = event.target.value;
    console.log("target",data);
    let regex=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;  

    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
    if (regex.test(str) && str != "") {
   
       event.target.classList.remove('custom-invalid');
       event.target.classList.add('custom-valid');
        // valid(username);
        validEmailId = true;
   } 
    else {
   
       event.target.classList.remove('custom-valid');
       event.target.classList.add('custom-invalid');
       
           // inputRequired(username, str);
        validEmailId = false;
   
   
     }
}

function validateConstiuency(event){

    const data = event.target.value;
    console.log("target",data);
   
    let regex = /[a-zA-Z]{3,15}$/;
    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
     if (regex.test(str) && str != "") {
  
      event.target.classList.remove('custom-invalid');
      event.target.classList.add('custom-valid');
       // valid(username);
       validConstituency = true;
  
    } else {
  
      event.target.classList.remove('custom-valid');
      event.target.classList.add('custom-invalid');
      
          // inputRequired(username, str);
        validConstituency = false;
  
  
    }
}

function validateDate(event) {
    const data = event.target.value;
    console.log("target",data);
   
   
    var today = new Date();
    
    if (Date.parse(data)<Date.parse(today)) {
  
      event.target.classList.remove('custom-invalid');
      event.target.classList.add('custom-valid');
       // valid(username);
       validDate = true;
  
    } else {
  
      event.target.classList.remove('custom-valid');
      event.target.classList.add('custom-invalid');
      
          validDate = false;
  
  
    }
  }

  function handleChange(event) {
    selectedDistrict = event.target.value
    console.log("selected District: ", selectedDistrict);
  }
  function renderDistrict(districtList) {
    /*console.log("DistrictsList: ", districtList);
    return districtList.map((district, index) => {
        console.log("district:",district);
       return (
        <option key={state.district} value={state.district}>{state.district}</option>
       )
    })*/
  };
  export default AddRequest;

