import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import showElectionAction from '../actions/view_election';
import viewByStateAction from '../actions/viewByState';
import viewByConstituencyAction from '../actions/viewByConstituency';
import viewByElectionNameAction from '../actions/viewByElectionName';
import viewByDateAction from '../actions/viewByDate';
import GetAllElectionConstituency from '../actions/getAllElectionConstituency';
import GetAllElectionDate from '../actions/getAllElectionDate';
import GetAllElectionState from '../actions/getAllElectionState';
import GetAllElectionElectionName from '../actions/getAllElectionName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import Header from './header';
import Aside from './aside';
import Footer from './footer';
import Slogan from './slogan';
import AdminHeader from './adminheader';
import { useState } from 'react';

let dispatch;
let selectedview;
let selectedOption;
const ShowElections = (props) => {

  let [filter, setFilter] = useState();
  let [initialState, setInitialState] = useState();
  let electionList = useSelector(state => state.electionReducer.initialState);

  let filterList = useSelector(state => state.electionReducer.filter);
  
   dispatch = useDispatch();

 /* React.useEffect(() => {
      ElectionList()
    }, []);
  
    const ElectionList = () => {
      dispatch(showElectionAction())
    }*/
  console.log("employeeList: ", electionList);
  if(!Array.isArray(electionList)) {
      electionList = [];
     
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
        dispatch(GetAllElectionState())
        .then((response) => {
            console.log("REsponse: ", response);
            console.log("filterList: ", filterList);
            setFilter(filterList);
        });
    } else if(selectedOption === "Election Name") {
        dispatch(GetAllElectionElectionName())
        .then((response) => {
            console.log("REsponse: ", response);
            console.log("filterList: ", filterList);
            setFilter(filterList);
        });
    } else if(selectedOption === "Constituency") {
        dispatch(GetAllElectionConstituency())
        .then((response) => {
            console.log("REsponse: ", response);
            console.log("filterList: ", filterList);
            setFilter(filterList);
        });
    }
    else if(selectedOption === "Date") {
      dispatch(GetAllElectionDate())
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
      dispatch(showElectionAction())
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("routeList: ", electionList);
        setInitialState(electionList);
    });
  }
   else if(selectedOption==="State"){
      dispatch(viewByStateAction(selectedview))
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("routeList: ", electionList);
        setInitialState(electionList);
    });
    }else if(selectedOption==="Constituency")
    {
      dispatch(viewByConstituencyAction(selectedview))
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("routeList: ", electionList);
        setInitialState(electionList);
    });
    }else if(selectedOption==="Election Name")
    {
      dispatch(viewByElectionNameAction(selectedview))
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("routeList: ", electionList);
        setInitialState(electionList);
    });
    }else if(selectedOption==="Date")
    {
      dispatch(viewByDateAction(selectedview))
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("routeList: ", electionList);
        setInitialState(electionList);
    });
    }
    
  }



    return (

<div>
<AdminHeader/>
  
      <main>

      <Slogan/>

      <section class="Custom-container technology-container">
          <div class="row mx-0 px-sm-0 mb-4  ">
          <div class="col-8  border border-dark pl-0 pr-5 bg-light">

          <div class="container pt-5 px-5 ">
            
          <h3 class="addElectionTitle mb-3">VIEW ELECTION</h3>
          <form onSubmit={handleSearch} class="d-flex mb-4">
            <div className="col-9">
                      <div class=" form-inline row mb-3">
                      <label for="view" class=" mr-3 font-weight-bold mr-4">View Election By :</label>
                      <select class="form-control col-5 " id="view" onChange={searchHandleChange} required>
                      <option>Select View By</option>
                        <option>View All</option>
                        <option>State</option>
                        <option>Election Name</option>
                        <option>Constituency</option>
                        <option>Date</option>
                      </select>
                    </div>
                    <div class="item form-inline row ">
                    <label for="view" class=" mr-3 font-weight-bold mr-4">Filter :</label>
                    <select id="filter" onChange={filterHandleChange} required class="w-50 form-control">
                    <option>select</option>
                        {renderFilterList(filterList)}
                    </select>
                </div>
                     
                        </div>
                  <div class="mt-4">
                  <button className="btn btn-primary">Search</button>
                  </div>
                  
           
            
            </form>
          <center>
          <h2 class="font-weight-bold">Election List</h2>
          
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
          {renderTableData(electionList)}
          </tbody>
          </table>
          
          </center>
    </div>
    
          
          </div>
          
          <Aside/>
          

          </div>
      </section>          
     

  </main>

<Footer/>

  </div>

   
     
);
};



function renderTableData(electionList) {
  console.log("employeeList: ", electionList);
  return electionList.map((election, index) => {
     const { electionId, state,constituency,date , election_name} = election //destructuring
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

export  default ShowElections;

