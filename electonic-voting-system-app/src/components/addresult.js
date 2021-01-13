
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useHistory } from "react-router-dom";
import showStateAction from '../actions/add_states';
import showVoteCountAction from '../actions/vote_count';
import stateReducer from '../reducers/stateReducer';
import resultReducer from '../reducers/resultReducer';

let selectedstateId;
let history;
let dispatch
export const AddResult= (props) => {
  
   dispatch = useDispatch();
   let resultList= useSelector(state=> state.resultReducer)
  let stateList = useSelector(state => state.stateReducer);

    
  const StateList = () => {
    dispatch(showStateAction())
  }
  React.useEffect(() => {
    StateList()
  }, []);

  

  /*const ResultList = () => {
    dispatch(showVoteCountAction())
  }

  React.useEffect(() => {
    ResultList()
  }, []);*/


   return (<div>
<h2 class="head mu-4 mb-4 align-center">Declare Result</h2>

        <div class="col-8 border border-dark p-5 ml-auto mr-auto">
       <form onSubmit={handleVoteCount}>
  <div class="form-group row ">
    <label for="electionname" class="col-4 col-form-label font-weight-bold">Election Name :</label>
    <div class="col-8">
      <input type="text"  class="form-control" name="electionname" id="electionname" ></input>
    </div>
  </div>
  <div class=" form-group row">
    <label for="statename" class="col-4 mr-3 font-weight-bold">Select State :</label>
    <select class="form-control col-7 state" id="statename" >
    {renderStates(stateList )}
    </select>
  </div>

  <button >CountVote</button>
      <button >Add Result</button>
        <div class='table  border border-dark col-12'>
      <table class="table table-hover col-12" >
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
    </div>)


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
function handleVoteCount(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log("in handle voteCount:",data)
  const value = data.get('electionname');
  var e = document.getElementById("statename").value;
  dispatch(showVoteCountAction(value,e))
}


