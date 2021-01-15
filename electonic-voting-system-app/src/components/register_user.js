import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';



let dispatch;
const RegisterUser = (props) => {
   
    dispatch = useDispatch();
   

    const RegisterUser = ()=>{
        
    }
    return (
    <div>
    <div>
    
    <main>
        <div class="jumbotron sky-color jumbotron-custom mb-0 px-sm-0 rounded-0">
        <div class="col-6 border border-dark p-5 ml-auto mr-auto">
        <h2>Register User</h2>
        <br></br>
        <form>
        <div class="form-group row ">
            <label for="Name" class="col-4 col-form-label font-weight-bold">Name :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="Name"  onBlur={validateUserName} required></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
            Name should only contain characters
       </small>
    </div>
    </div>
    

    

    <div class="form-group row ">
            <label for="contactNumber" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="contactNumber"  onBlur={validateMobileNumber} required></input>
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
            <label for="Constituency" class="col-4 col-form-label font-weight-bold">Address :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="Address" onBlur={validateAddress} required></input>
        
    </div>
    
    </div>

    <div class="form-group row">
  <label for="dob" class="col-4 col-form-label mr-3 font-weight-bold">Date Of Birth :</label>
  <input type="date" id="dob" name="dob" class="col-4 " required></input>
  <small id="namevalid" class="form-text text-danger invalid-feedback">
                Date of Birth can not greater than the current Date
        </small>
   
      </div>


    <div class=" form-group row">
        <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">District :</label>
        <select class="form-control col-7 state" id="exampleFormControlSelect1" required>
            <option>Washim</option>
            <option>Akola</option>
            <option>Balapur</option>
    </select>
    </div>
    
    <Button variant="primary" name="add" value="Register User" onClick={RegisterUser}>RegisterUser</Button>
  
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
let validAddress=false;
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

function validateAddress(event){

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
       validAddress = true;
  
    } else {
  
      event.target.classList.remove('custom-valid');
      event.target.classList.add('custom-invalid');
      
          // inputRequired(username, str);
        validAddress = false;
  
  
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

 
export default RegisterUser;

