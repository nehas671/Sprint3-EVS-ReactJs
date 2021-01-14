import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

import ViewCandidatesAction from '../actions/viewCandidate';
import viewByCandidateNameAction from '../actions/viewByCandidateName'
import Header from "./header";
import Slogan from "./slogan";
import Aside from "./aside";
import Footer from "./footer";
import viewByPartyNameAction from '../actions/viewByPartyName';



let dispatch;

const ViewCandidates = (props) => {


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
            <header class="Custom-container py-md-2 py-3   ">
            <div class="header-before"><span class="mr-4"><img src="logo.jpg" alt="brand-name" class="logo"/></span><h1 class="d-inline">Electronic Voting System</h1></div>
            <nav class="navbar navbar-expand-md  navbar-light d-md-block d-lg-flex px-sm-0 py-0 text-wrap ">


            {/*<div class="navbar-brand nav-custom-brand mb-3 mb-md-0 py-0">
                
    </div>*/}
            <button class="navbar-toggler  custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav flex-wrap w-100">
                    <li class="nav-item  nav-item-custom mb-2 mb-md-0 flex-wrap ">
                        <a class="nav-link text-dark border-primary nav-custom-link px-md-0 " href="#">Home</a>
                    </li>
                    <li class="nav-item  nav-item-custom  mb-2 mb-md-0 flex-wrap ">
                        <a class="nav-link text-dark px-md-0 border-primary nav-custom-link  " href="#">About Us</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0 border-primary  nav-custom-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0  border-primary  nav-custom-link " href="#">Candidate</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="#">View Candidate</a>
                    </li>
                </ul>

                <div class=" d-flex sky-color search-box ">
                    <input type="search" class=" border-0 sky-color  ml-md-auto" placeholder="search..."></input>
                    <div class="">
                        <button class=" btn search-button border-0 sky-color " type="button" id="search-button" ><FontAwesomeIcon icon={icons.faSearch} /></button>
                    </div>
                </div>


            </div>
        </nav>


    </header>


    <main>

<Slogan/>

<section class="Custom-container technology-container">
          <div class="row mx-0 px-sm-0 mb-4  ">
                            

          <div class="col-8  border border-dark pl-0 pr-5 bg-light">

          <div class="container pt-5 px-5 ">
            
          <h3 class="addCandidate mb-3">View Candidate</h3>
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
             
             {/*
             <td> <div class="btn-group" role="group" aria-label="Basic mixed styles example">
             <button type="button" class="btn btn-outline-warning" disabled>Edit</button>
             <button class="btn btn-outline-danger" onClick={handleDelete}>Delete</button>
             
            </td>*/}
             
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



export default ViewCandidates;





