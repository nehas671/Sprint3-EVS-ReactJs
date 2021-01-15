




import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import viewScheduleStateAction from '../actions/schedule_state_action'
import viewScheduleAction from '../actions/schedule_action'
import { useState } from 'react';
import viewScheduleElectionNameAction from '../actions/schedule_electionname_action';
import viewScheduleConstituencyAction from '../actions/schedule_constutuency_action';
import Header from '../components/header';
import Aside from '../components/aside';
import Slogan from '../components/slogan';
import viewScheduleStateListAction from '../actions/schedule_statelist_action'
import viewScheduleConstituencyListAction from '../actions/schedule_constituencylist'
import viewScheduleNameListAction from '../actions/schedule_name_list'
import Footer from './footer';
import AdminHeader from './adminheader';
import VoterHeader from './voterHeader';
import viewScheduleMonthAction from '../actions/schedule_month_action';
import viewScheduleMonthListAction from '../actions/schedule_month_list';
import viewScheduleDateListAction from '../actions/schedule_date_list';
import viewScheduleDateAction from '../actions/schedule_date';
import VoterAsideComponent from './voterAside';

let dispatch;
let selectedview;
let selectedOption;
const ShowSchedules = (props) => {

  let [filter, setFilter] = useState();
  let [initialState, setInitialState] = useState();
  let scheduleList = useSelector(state => state.scheduleReducer.initialState);

  let filterList = useSelector(state => state.scheduleReducer.filter);
  
   dispatch = useDispatch();

  console.log("scheduleList: ", scheduleList);
  if(!Array.isArray(scheduleList)) {
    scheduleList = [];
     
      console.log("Set electionList to blank array");
  }

  if(!Array.isArray(filterList)) {
   
    filterList=[];
    console.log("Set electionList to blank array");
}



  const searchHandleChange = (event) => {
    selectedOption = event.target.value;
    console.log("Selected option: " + selectedOption);
    if(selectedOption === "State") {
        dispatch(viewScheduleStateListAction())
        .then((response) => {
            console.log("REsponse: ", response);
            console.log("filterList: ", filterList);
            setFilter(filterList);
        });
    } else if(selectedOption === "Election Name") {
        dispatch(viewScheduleNameListAction())
        .then((response) => {
            console.log("REsponse: ", response);
            console.log("filterList: ", filterList);
            setFilter(filterList);
        });
    } else if(selectedOption === "Constituency") {
        dispatch(viewScheduleConstituencyListAction())
        .then((response) => {
            console.log("REsponse: ", response);
            console.log("filterList: ", filterList);
            setFilter(filterList);
        });
    }
    else if(selectedOption === "Month") {
      dispatch(viewScheduleMonthListAction())
      .then((response) => {
          console.log("REsponse: ", response);
          console.log("filterList: ", filterList);
          setFilter(filterList);
      });
  }
  else if(selectedOption === "Date") {
    dispatch(viewScheduleDateListAction())
    .then((response) => {
        console.log("REsponse: ", response);
        console.log("filterList: ", filterList);
        setFilter(filterList);
    });
}
    
}





  function handleSearch(event) {
    event.preventDefault();
    if(selectedOption==="View All"){
      dispatch(viewScheduleAction())
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("routeList: ", scheduleList);
        setInitialState(scheduleList);
    });
  }
   else if(selectedOption==="State"){
      dispatch(viewScheduleStateAction(selectedview))
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("routeList: ", scheduleList);
        setInitialState(scheduleList);
    });
    }else if(selectedOption==="Constituency")
    {
      dispatch(viewScheduleConstituencyAction(selectedview))
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("routeList: ", scheduleList);
        setInitialState(scheduleList);
    });
    }else if(selectedOption==="Election Name")
    {
      dispatch(viewScheduleElectionNameAction(selectedview))
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("routeList: ", scheduleList);
        setInitialState(scheduleList);
    });
    }

    else if(selectedOption==="Month")
    {
      dispatch(viewScheduleMonthAction(selectedview))
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("routeList: ", scheduleList);
        setInitialState(scheduleList);
    });
    }

    else if(selectedOption==="Date")
    {
      dispatch(viewScheduleDateAction(selectedview))
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("routeList: ", scheduleList);
        setInitialState(scheduleList);
    });
    }
    
  }



    return (

<div>
<VoterHeader/>
  
      <main>

      <Slogan/>

      <section class="Custom-container technology-container">
          <div class="row mx-0 px-sm-0 mb-4  ">
          <div class="col-8  border border-dark pl-0 pr-5 bg-light">

          <div class="container pt-5 px-5 ">
            
          <h3 class="addElectionTitle mb-3"><center>VIEW SCHEDULE</center></h3><br/>
          <form onSubmit={handleSearch} class="form-inline">
            
                      
                      <div class="form-group">
                        
                      <label for="view" class=" mr-3 font-weight-bold mr-4">View Schedule :</label>
                      <select class="form-control col-5 " id="view" onChange={searchHandleChange} required>
                      <option>Select View By</option>
                        <option>View All</option>
                        <option>State</option>
                        <option>Election Name</option>
                        <option>Constituency</option>
                        <option>Date</option>
                        <option>Month</option>
                      </select>
                    </div>
                    <div class="form-group">
                    <label for="view" class=" mr-3 font-weight-bold mr-4">Filter :</label>
                    <select id="filter" onChange={filterHandleChange} required class="w-50 form-control">
                    <option>select</option>
                        {renderFilterList(filterList)}
                    </select>
                </div>
                     
                        
                <div class="form-group">
                  <button className="btn btn-primary">Search</button>
                  </div>
                  
                  
                  
            </form><br/>
          <center>
          <h2 class="font-weight-bold">Scheduled Elections</h2>
          
          <table class="table table-border table-striped">
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
          
          </center>
    </div>
    
          
          </div>
          <aside class="col-4  rounded  pr-0  aside-custom d-flex justify-content-center">
          <VoterAsideComponent/>
          </aside>

          </div>
      </section>          
     

  </main>

<Footer/>

  </div>

   
     
);
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



function filterHandleChange(event) {
  selectedview = event.target.value
  console.log("Selected view: " + selectedview);
}

function renderFilterList(filterList) {
  console.log("filterList", filterList);
  return filterList.map((value) => {
      return (
          <option value = {value}>{value}</option>
      )
  })
} 

export  default ShowSchedules;
