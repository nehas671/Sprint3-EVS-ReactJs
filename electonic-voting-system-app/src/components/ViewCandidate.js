import React from 'react';


import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import AdminHeader from './adminheader';
import Slogan from "./slogan";
import AdminAsideComponent from './adminAside';
import Footer from "./footer";



import GetAllCandidateName from '../actions/getAllCandidateName';
import GetAllPartyName from '../actions/getAllPartyName';
import GetAllCandidateEmail from '../actions/getAllCandidateEmail';
import GetAllCandidateNumber from '../actions/getAllCandidateNumber';


import ViewCandidatesAction from '../actions/viewCandidate';
import viewByCandidateNameAction from '../actions/viewByCandidateName';
import viewByCandidateEmailAction from '../actions/viewByCandidateEmail';
import viewByCandidateNumberAction from '../actions/viewByCandidateNumber';
import viewByPartyNameAction from '../actions/viewByPartyName';


let dispatch;
let selectedview;
let selectedOption;

const ViewCandidates = (props) => {

  let [filter, setFilter] = useState();
  let [initialState, setInitialState] = useState();
  let candidateList = useSelector(state => state.candidateReducer.initialState);

  /*   useSelector is a function that takes the current 
      state as an argument and returns whatever data you want from it. */
  let filterList = useSelector(state => state.candidateReducer.filter);

   /* dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
  dispatch = useDispatch();


  console.log("CandidateList:", candidateList);
  if (!Array.isArray(candidateList)) {
    candidateList = [];
    console.log("Set candidateList to blank array");
  }

  console.log("FilterList:", filterList);
  if (!Array.isArray(filterList)) {
    filterList = [];
    console.log("Set filterList to blank array");
  }



  /*function to get data data fomm database a/c to filter selected*/
  const searchHandleChange = (event) => {
    selectedOption = event.target.value;
    console.log("Selected option: " + selectedOption);
    if (selectedOption === "Candidate Name") {
      dispatch(GetAllCandidateName())
        .then((response) => {
          console.log("Response: ", response);
          console.log("filterList: ", filterList);
          setFilter(filterList);
        });
    } else if (selectedOption === "Party Name") {
      dispatch(GetAllPartyName())
        .then((response) => {
          console.log("Response: ", response);
          console.log("filterList: ", filterList);
          setFilter(filterList);
        });
    } else if (selectedOption === "Email") {
      dispatch(GetAllCandidateEmail())
        .then((response) => {
          console.log("Response: ", response);
          console.log("filterList: ", filterList);
          setFilter(filterList);
        });
    } else if (selectedOption === "Mobile Number") {
      dispatch(GetAllCandidateNumber())
        .then((response) => {
          console.log("Response: ", response);
          console.log("filterList: ", filterList);
          setFilter(filterList);
        });
    }
  }





  /*function to get data from database a/c to value selected*/
  function handleSearch(event) {
    event.preventDefault();
    if (selectedOption === "View All") {
      dispatch(ViewCandidatesAction())
        .then((response) => {
          console.log("Response: ", response);
          console.log("routeList: ", candidateList);
          setInitialState(candidateList);
        });
    }
    else if (selectedOption === "Candidate Name") {
      dispatch(viewByCandidateNameAction(selectedview))
        .then((response) => {
          console.log("Response: ", response);
          console.log("routeList: ", candidateList);
          setInitialState(candidateList);
        });
    } else if (selectedOption === "Party Name") {
      dispatch(viewByPartyNameAction(selectedview))
        .then((response) => {
          console.log("Response: ", response);
          console.log("routeList: ", candidateList);
          setInitialState(candidateList);
        });
    } else if (selectedOption === "Email") {
      dispatch(viewByCandidateEmailAction(selectedview))
        .then((response) => {
          console.log("Response: ", response);
          console.log("routeList: ", candidateList);
          setInitialState(candidateList);
        });
    } else if (selectedOption === "Mobile Number") {
      dispatch(viewByCandidateNumberAction(selectedview))
        .then((response) => {
          console.log("Response: ", response);
          console.log("routeList: ", candidateList);
          setInitialState(candidateList);
        });
    }
  }

  return (
    <div>

      <AdminHeader></AdminHeader>

      <main>

        <Slogan />

        <section class="Custom-container technology-container">
          <div class="row mx-0 px-sm-0 mb-4  ">


            <div class="col-8  border border-dark pl-0 pr-5 bg-light">

              <div class="container pt-5 px-5 ">

                <h3 class="addCandidate mb-3">View Candidate</h3>
                <form onSubmit={handleSearch} class="d-flex mb-4" onMouseMove={EnableDisable}>
                  <div className="col-9">
                    <div class=" form-inline row mb-3">
                      <label for="view" class=" mr-3 font-weight-bold mr-4">Candidate View By</label>
                      <select class="form-control col-5 " id="view" onChange={searchHandleChange} required>
                        <option >Select View By</option>
                        <option >View All</option>
                        <option >Candidate Name</option>
                        <option>Party Name</option>
                        <option>Email</option>
                        <option> Mobile Number</option>
                      </select>
                    </div>


                    <div class="form-inline ">
                      <label for="name" class="col-form-label font-weight-bold mr-2">Filter : </label>
                      <select id="filter" onChange={filterHandleChange} required class="w-50 form-control">
                        <option>select</option>
                        {renderFilterList(filterList)}
                      </select>
                    </div>
                  </div>

                  <div class="mt-4">
                    <button className="btn btn-primary" id="btnsubmit" disabled="disabled">Search</button>
                  </div>

                </form>
                <center>
                  <h2 class="font-weight-bold">Candidate List</h2>

                  <table class="table table-border table-striped table table w-auto text-xsmall" id="tableData">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Party</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderTableData(candidateList)}
                    </tbody>
                  </table>
                </center>
              </div>


            </div>

            <AdminAsideComponent />

          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
};

/*function to enable Button when you select the view by dropdown*/
function EnableDisable(event) {

  /*  The preventDefault() method cancels the event if it is cancelable,
       meaning that the default action that belongs to the event will not occur. */
  event.preventDefault();

  var btnsubmit = document.getElementById("btnsubmit");
  console.log("selectedOption", selectedOption);

  if (selectedOption != undefined) {
    btnsubmit.disabled = false;
  }
  else {
    btnsubmit.disabled = true;
  }
}

/*function to get Candiddate from database*/
function renderTableData(candidateList) {
  console.log("candidateList inside render: ", candidateList);
  return candidateList.map((candidate, index) => {
    const partyName = candidate.party.partyName;
    const { candidateId, candidateName, address, age, contactNumber, email } = candidate //destructuring
    return (
      <tr key={candidateId}>
        <td>{candidateId}</td>
        <td>{candidateName}</td>
        <td>{address}</td>
        <td>{age}</td>
        <td>{contactNumber}</td>
        <td>{email}</td>
        <td>{partyName}</td>
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
      <option value={value}>{value}</option>
    )
  })
}

export default ViewCandidates;


