

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import viewScheduleStateAction from '../actions/schedule_state_action'
import viewScheduleAction from '../actions/schedule_action'
import viewScheduleElectionNameAction from '../actions/schedule_electionname_action';
import viewScheduleConstituencyAction from '../actions/schedule_constutuency_action';
import viewScheduleMonthAction from '../actions/schedule_month_action';
import Header from '../components/header';
import Aside from '../components/aside';
import Slogan from '../components/slogan';

let dispatch;
let selectedElectionId;
const ShowSchedules = (props) => {

  let scheduleList = useSelector(state => state.scheduleReducer);
  
   dispatch = useDispatch();

  
  console.log("scheduleList: ", scheduleList);
  if(!Array.isArray(scheduleList)) {
    scheduleList = [];
      console.log("Set scheduleList to blank array");
  }

    return (<div >
        <div class="border border-0" class="bg-light text-dark" style={{'height':"500px",'padding': "50px 15px 25px 15px"}}>
            
        <h2 class="font-weight-bold"><center>VIEW SCHEDULE</center></h2><br/>
<form onSubmit={handleSearch} class="form-inline">

  
   

    
        <div class="form-group">
    <label for="name" class="col-form-label font-weight-bold">Enter choice:</label>
    {/*<select id="name" name="name" onChange={handleChange}>
               {renderScheduleStates(scheduleList)}</select>*/}
    <input type="text" class="form-control " id="name" name="name" placeholder="Enter Value"></input>
      </div>
      <div class="form-group">
    <label for="view" class=" col-4 mr-3 font-weight-bold">View Schedule:</label>
    <select class="form-control col-5 " id="view">
    <option value="ViewAll">View All</option>
      <option value="State" id="state">State</option>
      <option value="ElectionName">Election Name</option>
      <option value="Constituency">Constituency</option>
      <option value="month">Month</option>
    </select>
    </div>
    <div class="form-group" >
  <button  class="btn btn-info">Search</button>
  </div>
  
 
  
  
  
  </form>
    <div class=" h-100 p-12"><br/>
    
    
    <table class="table table-border table-striped"  >
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>State</th>
            <th>Constituency</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
    {renderTableData(scheduleList)}
    </tbody>
    </table>
    </div>
   
    
</div></div>);
};



function renderTableData(scheduleList) {
  console.log("scheduleList: ", scheduleList);
  return scheduleList.map((schedule, index) => {
     const { electionId, state,constituency,date , election_name} = schedule //destructuring
     return (
        <tr key={electionId}>
           <td>{electionId}</td>
           <td>{election_name}</td>
           <td>{state}</td>
           <td>{constituency}</td>
           <td>{date}</td>
        </tr>
     )
  })
};

function handleChange(event) {
    selectedElectionId = event.target.value
    console.log("selected state: ", selectedElectionId);
}


function handleSearch(event) {
  event.preventDefault();
  const data = new FormData(event.target);
 
  console.log("in handle submit:",data)
  const value = data.get('name');

 var e = document.getElementById("view");
var selected = e.options[e.selectedIndex].value;
 console.log("value :",value);
 console.log("view selected",selected);
 if(selected==="ViewAll"){

  dispatch(viewScheduleAction());

 }else if(selected==="State")
  {
     
    dispatch(viewScheduleStateAction(value));
  }
  else if(selected==="ElectionName")
  {
    dispatch(viewScheduleElectionNameAction(value));
  }
  else if(selected==="Constituency")
  {
    dispatch(viewScheduleConstituencyAction(value));
  }
  else if(selected==="month")
  {
    dispatch(viewScheduleMonthAction (value));
  }
  
}

function renderScheduleStates(scheduleList) {
    console.log("stateList: ", scheduleList);
    //console.log("scheduleList[0].state: ", scheduleList[0].state);
    return scheduleList.map((schedule, index) => {
        const {  electionId,state } = schedule //destructuring
        return (
         <option key={electionId} value={state}>{state}</option>
       )
    })
 };
export  default ShowSchedules;