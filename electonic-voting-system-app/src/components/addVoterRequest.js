import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import VoterRequest from '../models/VoterRequest';
import Slogan from "./slogan";
import Aside from "./aside";
import Footer from './footer';
import showDistrictsAction from "../actions/districtAction";
import addVoterRequestAction from '../actions/addVoterRequestAction';


let dispatch;
let history;
let selectedDistrict;
let set;

const AddRequest = (props) => {
   
    dispatch = useDispatch();
    history = useHistory();
    let districtList = useSelector(state => state.userReducer);
   set = true;

    React.useEffect(() => {
        DistrictsList() }, []);
    
      const DistrictsList = () => {
        dispatch(showDistrictsAction())
      }

    console.log("DistrictList: ", districtList);
    if(!Array.isArray(districtList)) {
      districtList = [];
      console.log("Set List to blank array");
  }



    
    return (
    <div>
    
    <header class="Custom-container py-md-2 py-3   ">
  <div class="header-before"><span class="mr-4"><img src="logo.jpg" alt="brand-name" class="logo"/></span><h1 class="d-inline">Electronic Voting System</h1></div>
        <nav class="navbar navbar-expand-md  navbar-light d-md-block d-lg-flex px-sm-0 py-0 text-wrap ">


            {/*<div class="navbar-brand nav-custom-brand mb-3 mb-md-0 py-0">
                
    </div>*/}
            <button class="navbar-toggler  custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav flex-wrap w-100">
                    <li class="nav-item  nav-item-custom mb-2 mb-md-0 flex-wrap ">
                        <a class="nav-link text-dark border-primary nav-custom-link px-md-0 " href="#">Home</a>
                    </li>
                    <li class="nav-item  nav-item-custom  mb-2 mb-md-0 flex-wrap ">
                        <a class="nav-link text-dark px-md-0 border-primary nav-custom-link  " href="#">About Us</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0 border-primary  nav-custom-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0  border-primary  nav-custom-link " href="#">Voter Request</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="#">View Voter Request</a>
                    </li>
                </ul>

                <div class=" d-flex sky-color search-box ">
                    <input type="search" class=" border-0 sky-color  ml-md-auto" placeholder="search..."></input>
                    <div class="">
                        <button class=" btn search-button border-0 sky-color " type="button" id="search-button" ><FontAwesomeIcon icon={icons.faSearch} /></button>
                    </div>
                </div>


            </div>
        </nav>


    </header>


    <main>
        <Slogan/>

        <section class="Custom-container technology-container">
            <div class="row mx-0 px-sm-0 mb-4">

        <div class="col-8  pl-0 pr-5">
        <div class="col border border-dark bg-light p-5 ml-auto mr-auto">
        <h2>Add Voter Request</h2>
        <br></br>

        <form onSubmit={handleSubmitt} onMouseMove={EnableDisable}>
            <div class="form-group row ">
            <label for="Name" class="col-4 col-form-label font-weight-bold">Name :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="Name" name="name" onBlur={validateUserName} required></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
            Name should only contain characters
       </small>
    </div>
    </div>
    

    <div class="form-group row ">
            <label for="contactNumber" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="contactNumber" name="contactNumber" onBlur={validateMobileNumber} required></input>
        <small id="numbervalid" class="form-text text-danger invalid-feedback">
            Number should only contain 10 digits
       </small>
   </div>
    </div>

    <div class="form-group row ">
            <label for="emailId" class="col-4 col-form-label font-weight-bold">Email Id :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="emailId" name="emailId" onBlur={validateEmailId} required></input>
        <small id="numbervalid" class="form-text text-danger invalid-feedback">
            Email Id should be in proper format
       </small>
    </div>
    </div>

    <div class="form-group row ">
            <label for="constituency" class="col-4 col-form-label font-weight-bold">Constituency :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="constituency" name ="constituency" onBlur={validateConstiuency} required></input>
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
        <select class="form-control col-7 state" id="exampleFormControlSelect1" placeholder="Select District" onChange={handleChange} required>
           {renderDistrict(districtList)} 
           
           
    </select>
    </div>
    <button class="btn btn-primary" id="btnsubmit" disabled="disabled" >ADD</button>
    {/*<Button variant="primary" name="add" value="ADD VOTER REQUEST" >ADD VOTER REQUEST</Button>*/}
  
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


let validUsername=false;
let validNumber=false;
let validEmailId=false;
let validConstituency=false;
let validDate=false;

function EnableDisable(event)
{
  event.preventDefault();
  var btnsubmit=document.getElementById("btnsubmit");
  
  console.log("handle disabled called");
  console.log("validConstituency",validConstituency);
  console.log("validDate",validDate);
  console.log("validUsername",validUsername)
  
  if(validConstituency&&validDate&&validUsername&&validEmailId&&validNumber)
  {  
    set=false;
    console.log("set",set);
    btnsubmit.disabled=false;
  }
  else
  {
    btnsubmit.disabled=true;
  }
}

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
      
    console.log("DistrictsList: ", districtList);
    return districtList.map((district, index) => {
        console.log("district:",district);
       return (
        <option key={district.district} value={district.district}>{district.district}</option>
       )
    })
  };

  function handleSubmitt(event){
    event.preventDefault();

  const data = new FormData(event.target);
  console.log("in handle submit:",data)
  const name = data.get('name');
  const constituency = data.get('constituency');
  const emailId= data.get('emailId');
  const applicationStatus = 'Pending';
  const contactNumber = data.get('contactNumber');
  const dob = data.get('dob');
  console.log(dob);
  
  
  const voterObj = new VoterRequest(name, selectedDistrict,constituency, emailId ,applicationStatus,contactNumber,dob);
  console.log("voterRequestObj:",voterObj);
  dispatch(addVoterRequestAction(voterObj));
  alert("Voter Request Added Succesfully");
  history.push('/Officer_services');
     
  }
  export default AddRequest;

