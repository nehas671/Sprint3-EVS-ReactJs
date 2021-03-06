import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


import ViewCandidatesAction from '../actions/viewCandidate';
import viewByCandidateNameAction from '../actions/viewByCandidateName';
import viewByCandidateEmailAction from '../actions/viewByCandidateEmail';
import viewByCandidateNumberAction from '../actions/viewByCandidateNumber';
import Slogan from "./slogan";
import Aside from "./aside";
import Footer from "./footer";
import viewByPartyNameAction from '../actions/viewByPartyName';
import AdminHeader from './adminheader';
import GetAllCandidateName from '../actions/getAllCandidateName';
import GetAllPartyName from '../actions/getAllPartyName';
import GetAllCandidateEmail from '../actions/getAllCandidateEmail';
import GetAllCandidateNumber from '../actions/getAllCandidateNumber';
import AdminAsideComponent from './adminAside';
import deleteCandidateAction from '../actions/delete_candidate';



let dispatch;
let selectedview;
let selectedOption;

const ViewCandidates = (props) => {

  let [filter, setFilter] = useState();
  let [initialState, setInitialState] = useState();
  let candidateList = useSelector(state => state.candidateReducer.initialState);

  let filterList = useSelector(state => state.candidateReducer.filter);

    dispatch = useDispatch();
/*
    React.useEffect(() => {
        CandidateList()
      }, []);
    
      const CandidateList = () => {
        dispatch(ViewCandidatesAction())
      }

    console.log("candidateList: ", candidateList);
*/
    console.log("CandidateList:", candidateList);
    if(!Array.isArray(candidateList)) {
        candidateList = [];
        console.log("Set candidateList to blank array");
    }

    console.log("FilterList:", filterList);
    if(!Array.isArray(filterList)) {
        filterList = [];
        console.log("Set filterList to blank array");
    }



    const searchHandleChange = (event) => {
      selectedOption = event.target.value;
      console.log("Selected option: " + selectedOption);
      if(selectedOption === "Candidate Name") {
          dispatch(GetAllCandidateName())
          .then((response) => {
              console.log("Response: ", response);
              console.log("filterList: ", filterList);
              setFilter(filterList);
          });
      } else if(selectedOption === "Party Name") {
          dispatch(GetAllPartyName())
          .then((response) => {
              console.log("Response: ", response);
              console.log("filterList: ", filterList);
              setFilter(filterList);
          });
      }else if(selectedOption === "Email") {
        dispatch(GetAllCandidateEmail())
        .then((response) => {
            console.log("Response: ", response);
            console.log("filterList: ", filterList);
            setFilter(filterList);
        });
    }else if(selectedOption === "Mobile Number") {
      dispatch(GetAllCandidateNumber())
      .then((response) => {
          console.log("Response: ", response);
          console.log("filterList: ", filterList);
          setFilter(filterList);
      });
  }
  }
  
  
  
  
  
    function handleSearch(event) {
      event.preventDefault();
      if(selectedOption==="View All"){
        dispatch(ViewCandidatesAction())
        .then((response) => {
          console.log("Response: ", response);
          console.log("routeList: ", candidateList);
          setInitialState(candidateList);
      });
    }
     else if(selectedOption==="Candidate Name"){
        dispatch(viewByCandidateNameAction(selectedview))
        .then((response) => {
          console.log("Response: ", response);
          console.log("routeList: ", candidateList);
          setInitialState(candidateList);
      });
      }else if(selectedOption==="Party Name")
      {
        dispatch(viewByPartyNameAction(selectedview))
        .then((response) => {
          console.log("Response: ", response);
          console.log("routeList: ", candidateList);
          setInitialState(candidateList);
      });
      }else if(selectedOption==="Email")
      {
        dispatch(viewByCandidateEmailAction(selectedview))
        .then((response) => {
          console.log("Response: ", response);
          console.log("routeList: ", candidateList);
          setInitialState(candidateList);
      });
      }else if(selectedOption==="Mobile Number")
      {
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

<Slogan/>

<section class="Custom-container technology-container">
      <div class="row mx-0 px-sm-0 mb-4  ">
                        

      <div class="col-8  border border-dark pl-0 pr-5 bg-light">

      <div class="container pt-5 px-5 ">
        
      <h3 class="addCandidate mb-3">Delete Candidate</h3>
      <form onSubmit={handleSearch} class="d-flex mb-4">
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
              <button className="btn btn-primary">Search</button>
              </div>
              
       
        
        </form>
      <center>
      <h5 class="font-weight-bold">Candidate List</h5>
  
      <table class="table table-border table-hover table-sm table-striped table table w-auto text-xsmall " id="tableData">
      <thead>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Age</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Party</th>
              <th>Activity</th>
          </tr>
      </thead>
      <tbody>
      {renderTableData(candidateList)}
      </tbody>
      </table>

    
      </center>
</div>

      
      </div>
      
      <AdminAsideComponent/>
      

      </div>
  </section>          
</main>

<Footer/>   


      </div>
    );
};

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
             
             
             {/*<td>
             <input type="submit" value="Delete" onClick={(e) => deleteCandidate(e, candidateId)}></input></td>*/}
             <td> <div class="btn-group" role="group" aria-label="Basic mixed styles example">
             <button class="btn btn-outline-danger" value="Delete" onClick={(e) => deleteCandidate(e, candidateId)}>Delete</button>
             </div>
             
            </td>
             
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


function deleteCandidate(event,candidateId) {
  event.preventDefault();
  console.log("id",candidateId);
  dispatch(deleteCandidateAction(candidateId));
}

export default ViewCandidates;


