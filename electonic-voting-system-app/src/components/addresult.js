
import React from 'react';
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
   
   let resultList;

  

  const dispatch = useDispatch();

 

  

  React.useEffect(() => {
    StateList()
  }, []);

  const StateList = () => {
    dispatch(showStateAction())
  }

  let stateList = useSelector(state => state.stateReducer);


  console.log("stateList: ", { stateList });
  if (!Array.isArray(stateList)) {
    stateList = [];
    console.log("Set stateList to blank array");
  }   
   




  /*React.useEffect(() => {
    ResultList()
  }, []);
  

  const ResultList = () => {
  dispatch(showVoteCountAction())
  }


  let resultList= useSelector(state=> state.resultReducer)
  console.log("resultList: ", { resultList });
  if (!Array.isArray(resultList)) {
    resultList = [];
    console.log("Set resultList to blank array");
  }   */
   

 

   
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
    {renderStates(stateList)}
    </select>
  </div>

  <div class="btn btn-primary mr-4 mb-4" >CountVote</div>
      <div class="btn btn-primary mb-4">Add Result</div>
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
    
    </tbody>

        
        
    {renderTableData(resultList)}
        
        {/*<thead>
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
    <tr>
<td>Lok sabha</td>
<td>Maharashtra</td>
<td>23-12-2020</td>
<td>Priya Shetpal</td>
<td> Bhartiya Janta Party</td>
<td>Mumbai</td>
<td> 1400</td>
</tr>
<tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
        </tbody>*/}
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

function renderTableData(resultList) {

  console.log(resultList)

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

