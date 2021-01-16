import { Container } from "react-bootstrap";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import showStatesAction from '../actions/get_states';
import addElectionAction from '../actions/add_election';
import { useHistory } from "react-router-dom";
import Election from '../models/election';
import States from '../models/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import Header from "./header";
import Slogan from "./slogan";
import Aside from "./aside";
import Footer from "./footer";
import AdminHeader from './adminheader'
import addPartyAction from '../actions/add_party'
import Party from '../models/party'


let dispatch;
let history;
let set;
let disable=true;

const AddParty= (props) => {

  dispatch = useDispatch();
  history = useHistory();
  set=true;


    return (
        <div>
  <Router>
            <Link to="/party"></Link>
            <Link to="/viewParty"></Link>
          
        </Router>
      <AdminHeader/>

      <main>

<Slogan/>
   
  
  
<section class="Custom-container technology-container">
            <div class="row mx-0 px-sm-0 mb-4">
                              

            <div class="col-8  pl-0 pr-5">
            <div class="col border border-dark bg-light p-5 ml-auto mr-auto">
           
                <h2 class="font-weight-bold">ADD PARTY</h2>

  <form  onSubmit={handleSubmit} onMouseMove={EnableDisable}>

    <div class="form-group row pt-4 pb-3">
      <label for="party_name" class="col-4 col-form-label font-weight-bold">Party Name :</label>
      <div class="col-8">
        <input type="text" class="form-control" id="party_name" name="party_name" placeholder="Enter Party Name" onBlur={validatePartyName} required></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
          PrtyName should only  contain characters 
         </small>
      </div>
    </div>
    <div class=" form-group row pb-3">
      <label for="leader" class="col-4 col-form-label font-weight-bold">Leader Name :</label>
      <div class="col-8">
        <input type="text" class="form-control" id="leader" name="leader" placeholder="Enter Leader Name" onBlur={validateLeaderName} required></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
          leader name should only  contain characters 
         </small>
      </div>
    </div>
    <div class="form-group row pb-3">
    <label for="symbol" class="col-4 col-form-label font-weight-bold">Symbol :</label>
      <div class="col-8">
        <input type="text"  class="form-control" id="symbol" name="symbol" placeholder="Enter Symbol" onBlur={validatePartySymbol} required></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
        Party symbol should only  contain characters 
         </small>
      </div>
    </div>
    <center>
        <button class="btn btn-primary" id="btnsubmit" disabled="disabled">ADD</button>
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
}
let validPartyname=false;
let validLeadername=false;
let validPartysymbol=false;

function EnableDisable(event)
{
  event.preventDefault();
  var btnsubmit=document.getElementById("btnsubmit");
  
  console.log("handle disabled called");
  console.log("validPartyname",validPartyname);
  console.log("validLeadername",validLeadername);
  console.log("validPartysymbol",validPartysymbol)
  
  if(validPartyname&&validLeadername&&validPartysymbol)
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

function handleSubmit(event) {
  event.preventDefault();

  /*if(validConstituency&&validElectionname&&validDate)
  {
      disable=false;   
  }*/
  const data = new FormData(event.target);
  console.log("in handle submit:",data)
  const partyName = data.get('party_name');
  const leader = data.get('leader');
  const symbol = data.get('symbol');
  
  /*if(name==='' || name===null) {
      alert("Name cannot be blank");
      return;
  }*/
  
  const partyObj = new Party(partyName, leader, symbol);
  console.log("partyObj:",partyObj);
  dispatch(addPartyAction(partyObj));
  alert("Party Added Succesfully");
  history.push('/admin_service');
  
  
    
}
function validatePartyName(event) {
  const data = event.target.value;
  console.log("target",data);
 
  let regex = /[a-zA-Z]{3,10}$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
  if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');
     // valid(username);
     validPartyname = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    
        // inputRequired(username, str);
        validPartyname = false;
  }
}

function validateLeaderName(event) {
  const data = event.target.value;
  console.log("target",data);
 
  let regex = /[a-zA-Z]{3,10}$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
  if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');
     // valid(username);
     validLeadername = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    
        // inputRequired(username, str);
        validLeadername = false;


  }
}

function validatePartySymbol(event) {
  const data = event.target.value;
  console.log("target",data);
  let regex = /[a-zA-Z]{3,10}$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
  if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');
     // valid(username);
     validPartysymbol = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    
        // inputRequired(username, str);
        validPartysymbol = false;


  }
}



export default AddParty