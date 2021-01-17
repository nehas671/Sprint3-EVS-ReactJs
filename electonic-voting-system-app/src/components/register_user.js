import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import RegisterUser from '../models/RegisterUser';
import Slogan from "./slogan";
import Aside from "./aside";
import Footer from './footer';
import showDistrictsAction from "../actions/districtAction";
import registerUserAction from '../actions/registerUserAction';


let dispatch;
let history;
let selectedDistrict;
let set;

const Registeruser = (props) => {
   
    dispatch = useDispatch();
    history = useHistory();
    let districtList = useSelector(state => state.userReducer);
   
    React.useEffect(() => {
        DistrictsList() }, []);
    
      const DistrictsList = () => {
        dispatch(showDistrictsAction())
      }

    console.log("DistrictList: ", districtList);

    const register_user = ()=>{
        
    }

    if(!Array.isArray( districtList)) 
  {
    districtList = [];
    console.log("Set electionList to blank array");
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
        <h2>Register User</h2>
        <br></br>

        <form onSubmit={handleSubmitt} onMouseMove={EnableDisable}>
        <div class="form-group row ">
            <label for="Name" class="col-4 col-form-label font-weight-bold">Name :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="Name"  name="name" placeholder="Enter name"  onBlur={validateUserName} required></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
            Name should only contain characters
       </small>
    </div>
    </div>
    

    <div class="form-group row ">
            <label for="contact_number" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="contact_number" name="contact_number" placeholder="Enter mobile number" onBlur={validateMobileNumber} required></input>
        <small id="emailvalid" class="form-text text-danger invalid-feedback">
        Mobile number should be of 10 digits only 
       </small>
    </div>
    </div>

    <div class="form-group row ">
            <label for="gender" class="col-4 col-form-label font-weight-bold">Gender :</label>
            <div class="col-4">
        <div class="d-flex">
        <input type="radio" value="Male" name="gender" class="col-4" /> Male
        <input type="radio" value="Female" name="gender" class=" col-4"/> Female
        <input type="radio" value="Other" name="gender" class=" col-4" /> Other
        </div>
      </div>
      </div>

    <div class="form-group row ">
            <label for="email" class="col-4 col-form-label font-weight-bold">EmailId :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="email" name="email" placeholder="eg. patil@gmail.com" onBlur={validateEmailId} required></input>
        <small id="emailvalid" class="form-text text-danger invalid-feedback">
        Email must in patil@gmail.com format
       </small>
    </div>
    </div>



    <div class="form-group row ">
            <label for="password" class="col-4 col-form-label font-weight-bold">Password :</label>
            <div class="col-8">
        <input type="password"  class="form-control" id="password" name="password" placeholder="Enter password" onBlur={validateUserPassword} required></input>
        <small id="passvalid" class="form-text text-danger invalid-feedback">
        Password Format must match : For eg : User@123
       </small>
    </div>
    </div>



    <div class="form-group row ">
            <label for="address" class="col-4 col-form-label font-weight-bold">Address :</label>
            <div class="col-8">
        <textarea  class="form-control" id="address" name="address" placeholder="Enter address here" onBlur={validateAddress} required></textarea>
        <small id="addressvalid" class="form-text text-danger invalid-feedback">
        Address should contain at least 3 characters 
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
        <select class="form-control col-7 state" id="exampleFormControlSelect1" placeholder="Select District" onChange={handleChange} >
           {renderDistrict(districtList)} 
           
           
    </select>
    </div>
    <button class="btn btn-primary" id="btnsubmit" disabled="disabled">
                  ADD
                </button>
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
let validAddress=false;
let validDate=false;

function EnableDisable(event)
{
  event.preventDefault();
  var btnsubmit=document.getElementById("btnsubmit");
  
  console.log("handle disabled called");
  
  console.log("validUsername",validUsername)
  
  if(validAddress&&validDate&&validUsername&&validNumber&&validEmailId)
  
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




function validateUserPassword(event)
{
    const data = event.target.value;

    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    let str = data;

    if(regex.test(str) && str != "" && str != null)
    {
    }
    else
    {
        alert("Enter valid password and Password must contain a number.");
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
  const address = data.get('address');
  const gender = data.get('gender');
  
  const contactNumber = data.get('contact_number');
  const emailId= data.get('email');
  const password=data.get('password');
  const dob = data.get('dob');
  console.log(dob);
  console.log(contactNumber);
  
  
  const userObj = new RegisterUser(name, selectedDistrict,address, emailId,password ,contactNumber,dob,gender);
  console.log("RegisterUserObj:",userObj);

  dispatch(registerUserAction(userObj));
  history.push('/loginuser');

        
  }
export default Registeruser;