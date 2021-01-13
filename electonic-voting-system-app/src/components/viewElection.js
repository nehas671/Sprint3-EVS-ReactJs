import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import showElectionAction from '../actions/view_election';
import viewByStateAction from '../actions/viewByState';
import viewByConstituencyAction from '../actions/viewByConstituency';
import viewByElectionNameAction from '../actions/viewByElectionName';
import viewByDateAction from '../actions/viewByDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import Header from './header';
import Aside from './aside';
import Footer from './footer';
import Slogan from './slogan';


let dispatch;
const ShowElections = (props) => {

  let electionList = useSelector(state => state.electionReducer);
  
   dispatch = useDispatch();

  /*React.useEffect(() => {
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

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav flex-wrap w-100 ">
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
                        {/*<a class="nav-link text-dark px-md-0  border-primary  nav-custom-link " href="#">Election</a>*/}
                        <a class="nav-link  text-dark px-md-0  border-primary  nav-custom-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Election
                        </a>
                        <div class="dropdown-menu  nav-custom-link" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Add Election</a>
                          <a class="dropdown-item" href="#">View Election</a>
                        </div>

                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="#">FAQ</a>
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
                            

          <div class="col-8  pl-0 pr-5 bg-light">

          <div class="container pt-5 ">
            
          <form onSubmit={handleSearch}>
            <div class="form-group row ">
              <div class="form-inline col-5">
              <label for="name" class="col-form-label font-weight-bold">Enter choice:</label>
                <input type="text" class="form-control " id="name" name="name" placeholder="Enter Value"></input>
              </div>

              <div class=" form-inline row">
              <label for="view" class=" col-4 mr-3 font-weight-bold">Select Option:</label>
              <select class="form-control col-5 " id="view">
              <option value="ViewAll">View All</option>
                <option value="State">State</option>
                <option value="ElectionName">Election Name</option>
                <option value="Constituency">Constituency</option>
                <option value="Date">Date</option>
              </select>
            </div>
            <div class="col-2">
            <button>Search</button>
            </div>
            
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

  dispatch(showElectionAction());

 }else if(selected==="State")
  {
    dispatch(viewByStateAction(value));
  }else if(selected==="Constituency")
  {
    dispatch(viewByConstituencyAction(value));
  }else if(selected==="ElectionName")
  {
    dispatch(viewByElectionNameAction(value));
  }else if(selected==="Date")
  {
    dispatch(viewByDateAction(value));
  }
  
}

export  default ShowElections;
