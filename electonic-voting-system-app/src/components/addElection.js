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




let dispatch;
let history;
let selectedState;
let disable=true;

const AddElection= (props) => {


  dispatch = useDispatch();
  history = useHistory();
  let statlist = useSelector(state => state.electionReducer);

  React.useEffect(() => {
      StatesList()
    }, []);
  
    const StatesList = () => {
      dispatch(showStatesAction())
    }
  console.log("StatesList: ", statlist);

    
    return (
      <div>

          <Router>
            <Link to="/election"></Link>
            <Link to="/showelection"></Link>
          
        </Router>


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
                        <a class="nav-link text-dark px-md-0  border-primary  nav-custom-link " href="#">Election</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="#">View Election</a>
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
              <h2 class="addElectionTitle">ADD ELECTION</h2>
<form onSubmit={handleSubmit}>
  <div class="form-group row pt-4 pb-3">
    <label for="electionName" class="col-4 col-form-label font-weight-bold">Election Name :</label>
    <div class="col-8">
      <input type="text" class="form-control" id="electionName" name="name" placeholder="Enter Election Name" onBlur={validateElectionName}></input>
      <small id="namevalid" class="form-text text-danger invalid-feedback">
        Electionname should only contain characters
       </small>
    </div>
  </div>
  <div class=" form-group row pb-3">
    <label for="state" class="col-4 mr-3 font-weight-bold">Select State :</label>
    <select class="form-control col-7 state" id="state"  onChange={handleChange}>
    {renderStates(statlist)}
    </select>
  </div>
  <div class="form-group row pb-3">
  <label for="constituency" class="col-4 col-form-label font-weight-bold">Constituency :</label>
    <div class="col-8">
      <input type="text"  class="form-control" id="constituency" name="constituency" placeholder="Enter Constituency" onBlur={validateConstituencyName} ></input>
      <small id="namevalid" class="form-text text-danger invalid-feedback">
        Constituency name should only contain characters
       </small>
    </div>
  </div>
  <div class="form-group row pb-3">
  <label for="date" class="col-4 col-form-label mr-3 font-weight-bold">Election Date :</label>
  <div>
  <input type="date" id="date" name="date" class="col-12" onBlur={validateDate}></input>
  <small id="namevalid" class="form-text text-danger invalid-feedback">
        Election Date should not be the previous or current date
  </small>
  </div>
   
      </div>
      <button class="btn btn-primary" >ADD</button>
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

  /*if(validConstituency&&validElectionname&&validDate)
  {
      disable=false;   
  }*/
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
  history.push('/');

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


