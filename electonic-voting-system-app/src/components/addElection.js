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
import AdminHeader from "./adminheader";
import { useState } from 'react';





let dispatch;
let history;
let selectedState;


const AddElection= (props) => {

  let [filter, setdisable] = useState();
   setdisable=true;
  dispatch = useDispatch();
  history = useHistory();
  let statlist = useSelector(state => state.electionReducer.statelist);

  React.useEffect(() => {
      StatesList()
    }, []);
  
    const StatesList = () => {
      dispatch(showStatesAction())
    }
  console.log("StatesList: ", statlist);
  
  if(!Array.isArray(statlist)) {
    statlist = [];
     
      console.log("Set electionList to blank array");
  }
    
    return (
      <div>

          <Router>
            <Link to="/election"></Link>
            <Link to="/showelection"></Link>
          
        </Router>
      <AdminHeader/>

    <main>

      <Slogan/>
       

        <section class="Custom-container technology-container">
            <div class="row mx-0 px-sm-0 mb-4">
                              

            <div class="col-8  pl-0 pr-5">
            <div class="col border border-dark bg-light p-5 ml-auto mr-auto">
           
              <h2 class="addElectionTitle">ADD ELECTION</h2>
<form onSubmit={handleSubmit}>

  <div class="form-group row pt-4 pb-3">
    <label for="electionName" class="col-4 col-form-label font-weight-bold">Election Name :</label>
    <div class="col-8">
      <input type="text" class="form-control" id="electionName" name="name" placeholder="Enter Election Name" onBlur={validateElectionName} required></input>
      <small id="namevalid" class="form-text text-danger invalid-feedback">
        Electionname should only  contain characters 
       </small>
    </div>
  </div>
  <div class=" form-group row pb-3">
    <label for="state" class="col-4 mr-3 font-weight-bold">Select State :</label>
    <select class="form-control col-7 state" id="state"  onChange={handleChange} required>
    {renderStates(statlist)}
    </select>
  </div>
  <div class="form-group row pb-3">
  <label for="constituency" class="col-4 col-form-label font-weight-bold">Constituency :</label>
    <div class="col-8">
      <input type="text"  class="form-control" id="constituency" name="constituency" placeholder="Enter Constituency" onBlur={validateConstituencyName} required ></input>
      <small id="namevalid" class="form-text text-danger invalid-feedback">
        Constituency name should only contain characters
       </small>
    </div>
  </div>
  <div class="form-group row pb-3">
  <label for="date" class="col-4 col-form-label mr-3 font-weight-bold">Election Date :</label>
  <div>
  <input type="date" id="date" name="date" class="col-12" onBlur={validateDate} required></input>
  <small id="namevalid" class="form-text text-danger invalid-feedback">
        Election Date should not be the previous or current date
  </small>
  </div>
   
      </div>
      <button class="btn btn-primary">ADD</button>
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

let validElectionname=false;
let validConstituency=false;
let validDate=false;


function handleChange(event) {
  selectedState = event.target.value
  console.log("selected state: ", selectedState);
}
function renderStates(statlist) {
  console.log("StatesList: ", statlist);
  return statlist.map((state, index) => {
      console.log("state:",state);
     return (
      <option key={state.state} value={state.state}>{state.state}</option>
     )
  })
};

function handleSubmit(event) {
  event.preventDefault();

 
  const data = new FormData(event.target);
  console.log("in handle submit:",data)
  const name = data.get('name');
  const constituency = data.get('constituency');
  const date = data.get('date');
  console.log(date);
  /*if(name==='' || name===null) {
      alert("Name cannot be blank");
      return;
  }*/
  
  const empObj = new Election(name, selectedState, constituency,date);
  console.log("electionObj:",empObj);
  dispatch(addElectionAction(empObj));
  history.push('/election');
  
  
    

}

function validateElectionName(event) {
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
     validElectionname = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    
        // inputRequired(username, str);
        validElectionname = false;


  }
}


function validateConstituencyName(event) {
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
  
  if (Date.parse(data)>Date.parse(today)) {

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




export default AddElection;


