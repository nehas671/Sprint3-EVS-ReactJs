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
import AdminHeader from './adminheader';


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
                      <select class="form-control col-5 " id="view">
                      <option value="ViewAll">View All</option>
                        <option value="State">State</option>
                        <option value="ElectionName">Election Name</option>
                        <option value="Constituency">Constituency</option>
                        <option value="Date">Date</option>
                      </select>
                    </div>

                      <div class="form-group row ">
                        <div class="form-inline ">
                        <label for="name" class="col-form-label font-weight-bold mr-2">Enter Search Value : </label>
                          <input type="text" class="form-control " id="name" name="name" placeholder="Enter Value"></input>
                        </div>
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
