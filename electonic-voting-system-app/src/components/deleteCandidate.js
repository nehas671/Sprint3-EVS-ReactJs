import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

import ViewCandidatesAction from '../actions/viewCandidate';
import viewByCandidateNameAction from '../actions/viewByCandidateName';
import DeleteCandidateAction from '../actions/delete_candidate';
import Header from "./header";
import Slogan from "./slogan";
import Aside from "./aside";
import Footer from "./footer";
import viewByPartyNameAction from '../actions/viewByPartyName';
import AdminHeader from './adminheader';
import UpdateCandidateAction from '../actions/update_candidate';



let dispatch;

const DeleteCandidate = (props) => {


    let candidateList = useSelector(state => state.candidateReducer);

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

    if(!Array.isArray(candidateList)) {
        candidateList = [];
        console.log("Set candidateList to blank array");
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
          <h6>View by :</h6>
          <form onSubmit={handleSearch} class="d-flex mb-4">
            <div className="col-9">
                      <div class=" form-inline row mb-3">
                      <label for="view" class=" mr-3 font-weight-bold mr-4">Select View By</label>
                      <select class="form-control col-5 " id="view">
                      <option value="ViewAll">View All</option>
                        <option value="CandidateName">Candidate Name</option>
                        <option value="PartyName">Party Name</option>
                      </select>
                    </div>

                      <div class="form-group row ">
                        <div class="form-inline ">
                        <label for="name" class="col-form-label font-weight-bold mr-2">Enter Search Value : </label>
                          <input type="text" class="form-control " id="name" name="name" placeholder="Enter Search Value"></input>
                        </div>
                        </div>
                        </div>
                  <div class="mt-4">
                  <button className="btn btn-primary">Search</button>
                  </div>
                  
           
            
            </form>
          <center>
          <h2 class="font-weight-bold">Candidate List</h2>
      
          <table class="table table-border table-striped table-sm table-bordered table table w-auto text-xsmall table-hover" id="tableData">
          <thead class ="thead-dark">
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

          <div>
                <ul class="pagination -lg pager">
                    <li class="previous"><a href="#">Previous</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li class="next"><a href="#">Next</a></li>
                </ul>
            </div>


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

function renderTableData(candidateList) {
    console.log("candidateList inside render: ", candidateList);
    return candidateList.map((candidate, index) => {
        const partyName = candidate.party.partyName;
       const { candidateId, candidateName, address, age, contact_number, email } = candidate //destructuring
       return (
          <tr key={candidateId}>
             <td>{candidateId}</td>
             <td>{candidateName}</td>
             <td>{address}</td>
             <td>{age}</td>
             <td>{contact_number}</td>
             <td>{email}</td>
             <td>{partyName}</td>
             
             
             <td> <div class="btn-group" role="group" aria-label="Basic mixed styles example">
             {/*<button type="button" class="btn btn-outline-warning" onClick={(e) => updateCandidate(e, candidate)}>Edit</button>*/}
             <button class="btn btn-outline-danger" onClick={(e) => deleteCandidate(e, candidateId)}>Delete</button>
             </div>
            </td>
             
          </tr>
       )
    })
 };


 function handleSearch(event) {
    event.preventDefault();
    const data = new FormData(event.target);
   
    console.log("in handle submit:",data)
    const value = data.get("name");
  
   var e = document.getElementById("view");
  var selected = e.options[e.selectedIndex].value;
   console.log("value :",value);
   console.log("view selected",selected);
   if(selected==="ViewAll"){
  
    dispatch(ViewCandidatesAction());
  
   }
   else if(selected==="CandidateName")
    {
      dispatch(viewByCandidateNameAction(value));
    }else if(selected==="PartyName")
    {
      dispatch(viewByPartyNameAction(value));
    }
  }



  function deleteCandidate(event,candidateId) {
    event.preventDefault();
    console.log("id",candidateId);
    dispatch(DeleteCandidateAction(candidateId));
    alert("Candidate deleted successfully");
}


/*function updateCandidate(event,candidate){

  event.preventDefault();
  dispatch(UpdateCandidateAction(candidate));
}*/

export default DeleteCandidate;


