
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Header from './header';
import Slogal from './slogan';
import Footer from './footer';
import Aside from './aside';
 import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useHistory } from "react-router-dom";
import showStateAction from '../actions/add_states';
import showVoteCountAction from '../actions/vote_count';
import stateReducer from '../reducers/stateReducer';
import resultReducer from '../reducers/resultReducer';
import addResultAction from '../actions/add_result';

let selectedstateId;
let history;
let dispatch
export const AddResult= (props) => {
  
   dispatch = useDispatch();
   let resultList= useSelector(state=> state.resultReducer)
  /*let stateList = useSelector(state => state.stateReducer);
 
  const StateList = () => {
    dispatch(showStateAction())
  }
  React.useEffect(() => {
    StateList()
  }, []);
/*
  

  /*const ResultList = () => {
    dispatch(showVoteCountAction())
  }

  React.useEffect(() => {
    ResultList()
  }, []);*/

   return (<div>

<Header></Header>

<main>

<Slogal/>
<section class="Custom-container technology-container">
            <div class="row mx-0 px-sm-0 mb-4">

<div class="col-8  pl-0 pr-5">
        <div class="col-8 border border-dark p-5 ml-auto mr-auto">
        <h2 class="addElectionTitle">Declare Result</h2>
       <form onSubmit={handleAdd} >
  <div class="form-group row pt-4 pb-3 ">

    
    <label for="electionname" class="col-4 col-form-label font-weight-bold">Election Name</label>
    <div class="col-8">
      <input type="text"  class="form-control" name="electionname" id="electionname" placeholder="Enter Election Name" onBlur={validateElectionName} ></input>
      <small id="namevalid" class="form-text text-danger invalid-feedback">
        Election Name only contain characters and Size should be greater than 3
       </small>

   
    </div>
  </div>
  <div class=" form-group row">
    <label for="statename" class="col-4 mr-3 font-weight-bold">Select State</label>
    <select class="form-control col-7 state" id="statename" >
    <option>Maharashtra</option>
    <option>Madhya Pradesh</option>
    </select>

  </div>

  
  <button  onClick={handleAlternative} type="button" class="btn btn-outline-primary ml-5 mr-5">CountVote</button>
  <button type="submit" class="btn btn-outline-primary">Add Result</button>
     
  <div class="col-3">
      <table class="table table-border table-striped">
      <thead>
            <tr>
<th>Election Name</th>
<th>State</th> 
<th>Date</th>
<th>Candidate Name</th>
<th>Party Name</th>
<th>Constituency</th>
<th> Votes</th>
  </tr>
</thead>
    <tbody>
    {renderTableData(resultList)}
    </tbody>

</table>
</div>

</form>
      </div>
            </div>

            <Aside/>
          </div>
        </section>

        </main>
        <Footer/>
    </div>);


}

function renderStates(stateList ) {

  console.log("stateList: ", stateList);
  return stateList.map((states, index) => {
    const { state } = states 
    return (
      <option key={state} value={state}>{state}</option>
    )
  })
};


function handleChange(event)
 {
   event.preventDefault();
  selectedstateId = event.target.value
  console.log("selected state: ", selectedstateId);
}

function renderTableData(resultList ) {
return resultList.map((resultList, index) => {
     const { election_name, state,date, candidate_name, party_name, constituency, votes} = resultList //destructuring
     return (
        <tr key={election_name}>
          <td>{election_name}</td>
           <td>{state}</td>
           <td>{date}</td>
           <td>{candidate_name}</td>
           <td>{party_name}</td>
<td>{constituency}</td>
<td>{votes}</td>
           
         
        </tr>
     )
  })
};
function handleAdd(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log("in handle voteCount:",data)
  const value = data.get('electionname');
  var e = document.getElementById("statename").value;
  dispatch(addResultAction(value,e))
}


function  handleAlternative(event) {
  event.preventDefault();
  const value=document.getElementById('electionname').value;
  var e = document.getElementById("statename").value;
  dispatch(showVoteCountAction(value,e))
}


let validElectionname=false;
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
  validElectionname = true;

  } else {
event.target.classList.remove('custom-valid');
 event.target.classList.add('custom-invalid');
  validElectionname = false;
  }
}
