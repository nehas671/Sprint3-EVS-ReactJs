import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserLoginAction from '../actions/userlogin';
import UserLogin from '../models/userlogin';
import Header from './header';
import Aside from './aside';
import Footer from './footer';
import Slogan from './slogan';
//import { Form, Table, Jumbotron, Button } from 'react-bootstrap'

let dispatch;
let history;
let email; 
let password;

 
export const LoginUserComponent = (props) =>
{
  dispatch = useDispatch();
  history = useHistory();
  
  return(
  <div>
    <Header/>
    <main>
      <Slogan/>
      <section class="Custom-container technology-container">
        <div class="row mx-0 px-sm-0 mb-4  ">
          <div class="col-8   border border-dark bg-light p-5">
            <form  onMouseMove={EnableDisable} onSubmit={handleSubmit}>
              <div class="form-group row pb-3">
                <label for="email" class="col-4 col-form-label font-weight-bold">
                  Email Id :
                </label>
                <div class="col-8">
                  <input type="text"  class="form-control" id="email" name="Email" placeholder="eg. abcd@gmail.com" onBlur={validateUserEmail} required >
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
                  <input type="password" id="password" name="Password" class="form-control" onBlur={validateUserPassword} required ></input>
                  <small id="namevalid" class="form-text text-danger invalid-feedback">
                    Enter password
                  </small>
                </div>
              </div>
              <button class="btn btn-primary" id="btnsubmit" disabled="disabled">
                LOGIN
              </button>
            </form>
            <h3>
              Not yet Registered?
            </h3> 
            <a class="nav-link text-primary font-weight-bold" href="/RegisterUser">
              Click here to register
            </a>
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

function handleSubmit(event)
{
  event.preventDefault();
  const data = new FormData(event.target);
  const emailId = data.get('Email');
  const password = data.get('Password');
  
  const userObj = new UserLogin(emailId, password);
  dispatch(UserLoginAction(userObj))
  .then(response =>
    {
      alert("Login Successful!!");
      history.push('/VoterServices');
    }
  )
  .catch(error =>
    {
      alert("Invalid Email Or Password!");
      return Promise.reject(error.response);
    }
  );  
}

export default LoginUserComponent;