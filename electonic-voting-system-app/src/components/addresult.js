
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Header from './header';

import Footer from './footer';
import Aside from './aside';
 import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useHistory } from "react-router-dom";
import showStateAction from '../actions/add_states';
import showVoteCountAction from '../actions/vote_count';
import stateReducer from '../reducers/stateReducer';
import resultReducer from '../reducers/resultReducer';
import addResultAction from '../actions/add_result';
import AdminHeader from './adminheader';
import showElectionNameAction  from'../actions/electionname'; 
import Slogal from './slogan';

let selectedstateId;
let history;
let dispatch

let listState = false;
let set = true;
let validElectionName = false;
let validState = false;





export const AddResult= (props) => {
   dispatch = useDispatch();

   let [election, setElectionNamelist] =useState();
   let [filter, setStatelist] = useState();
   let [result, setResultList] = useState();




   let electionList=useSelector(state => state.resultReducer.electionname);
  let stateList = useSelector(state => state.resultReducer.statelist);


  React.useEffect(() => {
    ElectionList()
  }, []);



  const ElectionList = () => {
    dispatch(showElectionNameAction())
    .then((response) => {
      console.log("REsponse: ", response);
      console.log("routeList: ", electionList);
      setElectionNamelist(electionList);
  })
}




if(!Array.isArray(electionList)) {
    electionList = [];
      console.log("Set electionList to blank array");
  }



  React.useEffect(() => {
    StateList()
  }, []);


  const StateList = () => {
    dispatch(showStateAction())
    .then((response) => {
      console.log("REsponse: ", response);
      console.log("routeList: ", stateList);
      setStatelist(stateList);
  })
}

if(!Array.isArray(stateList)) {
    stateList = [];
      console.log("Set stateList to blank array");
  }


  let resultList= useSelector(state=> state.resultReducer.votecount)

  if(!Array.isArray(resultList)) {
    resultList = [];
      console.log("Set stateList to blank array");
  }
/*
  /*const ResultList = () => {
    dispatch(showVoteCountAction())
  }

  React.useEffect(() => {
    ResultList()
  }, []);*/

   return (<div>
<AdminHeader></AdminHeader>
    <main>
      
<Slogal></Slogal>

        <section class="Custom-container technology-container">
            <div class="row mx-0 px-sm-0 mb-4">
            <div class="col-8  pl-0 pr-5">
            <div class="col border border-dark bg-light p-5 ml-auto mr-auto">
              <h2 class="addElectionTitle">Declare Result</h2>
              <form onSubmit={handleAdd} onMouseMove={EnableDisable} >
  {/*<div class="form-group row pt-4 pb-3">
  <label for="electionname" class="col-4 col-form-label font-weight-bold">Election Name</label>
    <div class="col-8">
      <input type="text"  class="form-control" name="electionname" id="electionname" placeholder="Enter Election Name" onBlur={validateElectionName} ></input>
      <small id="namevalid" class="form-text text-danger invalid-feedback">
        Election Name only contain characters and Size should be greater than 3
       </small>
    </div>
  </div>*/}


  <div class=" form-group row">
    <label for="electionname" class="col-4 mr-3 font-weight-bold">Select Election Name</label>
    <select class="form-control col-7 state" id="electionname"   onBlur={handleElectionNameChange}   onChange={handleElectionName}  >
   <option></option>
   {renderElection(electionList)}
    </select>

    <small id="namevalid" class="form-text text-danger invalid-feedback">
   Please select Election Name from the list!

   </small>
  </div>


  <div class=" form-group row">
    <label for="statename" class="col-4 mr-3 font-weight-bold">Select State</label>
    <select class="form-control col-7 state" id="statename"  onBlur={handleStateChange} onChange={handleChange} >
  <option></option>
  
   {renderStates(stateList)}
    </select>



    <small id="namevalid" class="form-text text-danger invalid-feedback">
   Please select  State Name from the list

   </small>




  </div>

 
  <button  onClick={handleAlternative}   id="btnsubmit"  class="btn btn-outline-primary ml-5 mb-3 mr-5">Vote Count</button>
  <button type="submit"    id="btnsubmit2"  class="btn btn-outline-primary mb-3">Add Result</button>
     

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



function renderElection(electionList)
{
  console.log("electionList: ", electionList);
  return electionList.map((value) => {
    return (
        <option value = {value}>{value}</option>
    )
})

}





function handleElectionName(event)
{
  selectedstateId=
  event.preventDefault(); 
}


function renderStates( stateList ) {
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
  const value=document.getElementById('electionname').value;
  var e = document.getElementById("statename").value;
  dispatch(addResultAction(value,e))

 
}


function  handleAlternative(event) {
  event.preventDefault();
  const value=document.getElementById('electionname').value;
  var e = document.getElementById("statename").value;
  dispatch(showVoteCountAction(value,e))
}



function handleElectionNameChange(event)
{
    var enteredElectionName=event.target.value;
    if(enteredElectionName ==="")
    {
        event.target.classList.remove('custom-valid');
        event.target.classList.add('custom-invalid');
        console.error("Please select election name from drop down!")
    }
    else
    {
        event.target.classList.remove('custom-invalid');
        event.target.classList.add('custom-valid');
        console.log({enteredElectionName});
        validElectionName = true;
    }
}


function handleStateChange(event)
{
    var enteredState = event.target.value;
    if(enteredState ==="")
    {
        event.target.classList.remove('custom-valid');
        event.target.classList.add('custom-invalid');
        console.error("Please select state from drop down!")
    }
    else
    {
        event.target.classList.remove('custom-invalid');
        event.target.classList.add('custom-valid');
        console.log({enteredState});
        validState = true;
    }
}



function EnableDisable(event)
{
    event.preventDefault();
    var btnsubmit=document.getElementById("btnsubmit");
    var btnsubmit2=document.getElementById("btnsubmit2")
    console.log("handle disabled called");
    console.log("validElectionName: ",validElectionName);
    console.log("validState:",validState);
    
    if(validElectionName&&validState)
    {
        set=false;
        console.log("set",set);
        btnsubmit.disabled=false;
        btnsubmit2.disabled=false;
  
    }
    else
    {
        btnsubmit.disabled=true;
        btnsubmit2.disabled=true;
      
    }
}





/*let validElectionname=false;
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
}*/
