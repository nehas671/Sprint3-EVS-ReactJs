import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserLoginAction from '../actions/loginAction';
import Login from '../models/Login';
//import {} from '../css/registerUser.css';
import { Form, Table, Jumbotron, Button } from 'react-bootstrap'
import Header from './header';
import Aside from './aside';
import Footer from './footer';
import Slogan from './slogan';

let dispatch;
let history;
let email; 
let password;

 
export const MultipleLoginComponent = (props) =>{
    dispatch = useDispatch();
    history = useHistory();

    return (
    <div>
      <Header/>
      <main>
        <Slogan/>
        <section class="Custom-container technology-container">
          <div class="row mx-0 px-sm-0 mb-4  ">
            <div class="col-8   border border-dark bg-light p-5">
              <form  onMouseMove={EnableDisable} onSubmit={handleSubmit}>
                <div class=" form-group row pb-3">
                  <label for="service" class="col-4 mr-3 font-weight-bold">
                    Select login type :
                  </label>
                  <select class="form-control col-7 state" id="role" name="role" onChange={handleChange} required>
                    <option>Select</option>
                    <option>admin</option>
                    <option>officer</option>
                  </select>
                  <small id="namevalid" class="form-text text-danger invalid-feedback">
                    Select option from dropdown
                  </small>
                </div>
                <div class="form-group row pb-3">
                  <label for="email" class="col-4 col-form-label font-weight-bold">
                    Email Id :
                  </label>
                  <div class="col-8">
                    <input type="text"  class="form-control" id="email" name="email" placeholder="eg. abcd@gmail.com" onBlur={validateUserEmail} required >
                    </input>
                    <small id="namevalid" class="form-text text-danger invalid-feedback">
                      Enter email in proper format(eg. abcd@gmail.com)
                    </small>
                  </div>
                </div>
                <div class="form-group row pb-3">
                  <label for="password" class="col-4 col-form-label mr-3 font-weight-bold">
                    Password :
                  </label>
                  <div>
                    <input type="password" id="password" name="pwd" class="form-control" onBlur={validateUserPassword} required ></input>
                    <small id="namevalid" class="form-text text-danger invalid-feedback">
                      Enter password
                    </small>
                  </div>
                </div>
                <button class="btn btn-primary" id="btnsubmit" disabled="disabled">
                  LOGIN
                </button>
              </form>
            </div>
          <Aside/>
        </div>
      </section>          
    </main>
  <Footer/>
  </div>
  );
}

let validEmail=false;
let validPassword=false;
let validSelectType=false;

function handleChange(event)
{
    var selectType=event.target.value;
    if(selectType ==="Select")
    {
        event.target.classList.remove('custom-valid');
        event.target.classList.add('custom-invalid');
        console.error("Please select election name from drop down!")
        validSelectType=false;
        
    }
    else
    {
        event.target.classList.remove('custom-invalid');
        event.target.classList.add('custom-valid');
        validSelectType=true;
    }
}

function EnableDisable(event)
{
  event.preventDefault();
  var btnsubmit=document.getElementById("btnsubmit");
  
  
  if(validEmail&&validPassword)
  {  
   
    btnsubmit.disabled=false;
  }
  else
  {
    btnsubmit.disabled=true;
  }
}



function validateUserEmail(event)
 {
     const data = event.target.value;

     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     let str = data;

     if(regex.test(str) && str != "" && str != null)
     {
        event.target.classList.remove('custom-invalid');
        event.target.classList.add('custom-valid');
        // valid(username);
        validEmail = true;
     }
     else
     {
        validEmail = false;
         alert("Enter valid Email");
     }
 }

 function validateUserPassword(event)
 {
     const data = event.target.value;

     let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
     let str = data;

     if(regex.test(str) && str != "" && str != null)
     {
        event.target.classList.remove('custom-invalid');
        event.target.classList.add('custom-valid');
        // valid(username);
        validPassword = true;
     }
     else
     {

        validPassword = false;
         alert("Enter valid password and Password must contain a number.");
     }
 }
function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const emailId = data.get('email');
    const password = data.get('pwd');
    const role = data.get('role');
console.log(role);
    const loginObj = new Login(emailId, password,role);
    dispatch(UserLoginAction(loginObj)).then(response => {
        alert("Login Successful!!");
        if(role==="admin"){
            history.push('/admin_services');

        }else if(role==="officer"){
            history.push('/Officer_services');

        }
        else{
            history.push('/welcome');
        }
     })
     .catch(error => {
         alert("Invalid Credentials");
        return Promise.reject(error.response)
     });;
    
}
export default MultipleLoginComponent;