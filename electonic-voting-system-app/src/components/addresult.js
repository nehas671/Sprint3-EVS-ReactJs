
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

export const AddResult= (props) => {
   
  let dispatch = useDispatch();
  
  let stateList = useSelector(state => state.stateReducer);

    
  const StateList = () => {
    dispatch(showStateAction())
  }
  React.useEffect(() => {
    StateList()
  }, []);

  


  let resultList= useSelector(state=> state.resultReducer)

  const ResultList= () => {
    dispatch(showVoteCountAction())
  }
  React.useEffect(() => {
    ResultList()
  }, []);


  
   return (<div>
<h2 class="head mu-4 mb-4">Declare Result</h2>

        <div class="col-8 border border-dark p-5 ml-auto mr-auto">
       <form>
  <div class="form-group row ">
    <label for="electionName" class="col-4 col-form-label font-weight-bold">Election Name :</label>
    <div class="col-8">
      <input type="text"  class="form-control" id="electionName" ></input>
    </div>
  </div>
  <div class=" form-group row">
    <label for="statename" class="col-4 mr-3 font-weight-bold">Select State :</label>
    <select class="form-control col-7 state" id="statename">
   
    </select>
  </div>

  <button onClick={renderTableData(resultList,dispatch)}>CountVote</button>CountVote
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
    {renderTableData(resultList,dispatch)}
    </tbody>

</table>
</div>
</form>
</div>
    </div>)


}


/*function renderStates(stateList ) {

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
*/
function renderTableData(resultList , dispatch) {
dispatch(showVoteCountAction)
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

 


  /*return employeeList.map((employee, index) => {
      const deptName = employee.department.name;
     const { employeeId, name, sal } = employee //destructuring
     return (
        <tr key={employeeId}>
           <td>{employeeId}</td>
           <td>{name}</td>
           <td>{sal}</td>
           <td>{deptName}</td>
        </tr>
     )
  })*/

