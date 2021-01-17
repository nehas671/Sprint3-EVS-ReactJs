import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import getAllVoterDistrictAction from '../actions/getAllVoterDistrict';
import getAllVoterStatusAction from '../actions/getAllVoterStatus';
import viewReqByDistrictAction from '../actions/viewReqByDistrict';
import viewReqByStatusAction from '../actions/viewReqByStatus';
import ViewVoterReqAction from '../actions/view_voterReq' 
import AdminHeader from '../components/adminheader';
import Aside from './aside';
import Footer from './footer';
import Slogan from './slogan';
import ApproveRequestAction from '../actions/approveVoterRequestAction';
import { useHistory } from "react-router-dom";

let dispatch;
let selectedview;
let selectedOption;
let history;

const ViewVoterReq = (props) => {

  let [filter, setFilter] = useState();
  let [initialState, setInitialState] = useState();
  let voterList = useSelector(state => state.officerReducer.initialState);

  let filterList = useSelector(state => state.officerReducer.filter);
  
   dispatch = useDispatch();
   history= useHistory();

 /* React.useEffect(() => {
      VoterList()
    }, []);
  
    const VoterList = () => {
      dispatch(showElectionAction())
    }*/
  console.log("voterList: ", voterList);
  if(!Array.isArray(voterList)) {
      voterList = [];
      console.log("Set List to blank array");
  }

  if(!Array.isArray(filterList)) {
   
    filterList=[];
    console.log("Set filterList to blank array");
}



  const searchHandleChange = (event) => {
    selectedOption = event.target.value;
    console.log("Selected option: " + selectedOption);
    if(selectedOption === "Status") {
        dispatch(getAllVoterStatusAction())
        .then((response) => {
            console.log("Response: ", response);
            console.log("filterList: ", filterList);
            setFilter(filterList);
        });
    } else if(selectedOption === "District") {
        dispatch(getAllVoterDistrictAction())
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
      dispatch(ViewVoterReqAction())
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("voterList: ", voterList);
        setInitialState(voterList);
    });
  }
   else if(selectedOption==="Status"){
      dispatch(viewReqByStatusAction(selectedview))
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("voterList: ", voterList);
        setInitialState(voterList);
    });
    }else if(selectedOption==="District")
    {
      dispatch(viewReqByDistrictAction(selectedview))
      .then((response) => {
        console.log("REsponse: ", response);
        console.log("voterList: ", voterList);
        setInitialState(voterList);
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
          <div class="col-12  border border-dark pl-0 pr-5 bg-light">

         <div class="container pt-5 px-5 ">
            
          <h3 class="addElectionTitle mb-3">VIEW  VOTER REQUEST</h3>
          <form onSubmit={handleSearch} onMouseMoveCapture={EnableDisable} class="d-flex mb-4" >
            <div className="col-9">
                      <div class=" form-inline row mb-3">
                      <label for="view" class=" mr-3 font-weight-bold mr-4">View By :</label>
                      <select class="form-control col-5 " id="view" onChange={searchHandleChange} required>
                      <option>Select View By</option>
                        <option>View All</option>
                        <option>Status</option>
                        <option>District</option>
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
                  <button className="btn btn-primary" id="btnsubmit" disabled="disabled">Search</button>
                  </div>
                  
           
            
            </form>
          <center>
          <h2 class="font-weight-bold">voter request List</h2>
          
          <table class="table table-border table-striped">
          <thead>
              <tr>
              <th>VoterId</th>
              <th>Name</th>
            <th>date of birth</th>
            <th>Constituency</th>
            <th>Email Id</th>
            <th>Contact Number</th>
            <th>District</th>
            
            <th>Status</th>
            <th>Actions</th>
              </tr>
          </thead>
          <tbody>
          {renderTableData(voterList)}
          </tbody>
          </table>
          
          </center>
    </div>
    
    
          </div>
          
          
          

          </div>
      </section>          
     

  </main>

<Footer/>

  </div>

   
     
);
};

function EnableDisable(event)
{
  event.preventDefault();
  
  var btnsubmit=document.getElementById("btnsubmit");
  console.log("selectedOption",selectedOption);
  
  let option=undefined;
  if(selectedOption!=undefined)
  {  
    btnsubmit.disabled=false;
  }
  else
  {
    btnsubmit.disabled=true;
  } 
}


function renderTableData(voterList) {
  console.log("voterList: ", voterList);
  return voterList.map((voter, index) => {
     const { name,dob,constituency,emailId,contact_no,district,voter_id,status} = voter //destructuring
     return (
        <tr key={voter_id}>
          <td>{voter_id}</td>
                <td>{name}</td>
                <td>{dob}</td>
                <td>{constituency}</td>
                <td>{emailId}</td>
                <td>{contact_no}</td>
                <td>{district}</td>
                
                <td>{status}</td>
                <td><Button as="input" type="button" value="approve" onClick={(e) =>aproveVoterRequest(e,voter_id)}></Button></td>
                <td><Button as="input" type="button" value="reject" onClick = {(e)=>rejectVoterRequest(e,voter_id)}></Button></td>
        </tr>
     )
  })
};

function aproveVoterRequest(event,voter_id) {

  event.preventDefault();
  //console.log("eventtt",event.name);
  console.log("user_id",voter_id);     
   dispatch(ApproveRequestAction(voter_id));
   console.log("voterRequestObj:",voter_id);
   history.push("/viewVoterReq");
   }
function rejectVoterRequest(event,voter_id) {
  event.preventDefault();
  //console.log("eventtt",event.name);
  console.log("user_id",voter_id);
      
    dispatch(ApproveRequestAction(voter_id));
   console.log("voterRequestObj:",voter_id);
    history.push("/viewVoterReq");
    }

   
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
/*function EnableDisable(event)
{
  event.preventDefault();
  var btnsubmit=document.getElementById("btnsubmit");
  
  console.log("handle disabled called");
  console.log("selectCriteria",selectCriteria);
  console.log("selectFilter",selectFilter);
  
  
  if(selectCriteria)
  {  
    set=false;
    console.log("set",set);
    btnsubmit.disabled=false;
  }
  else
  {
    btnsubmit.disabled=true;
  }
}*/
export  default ViewVoterReq;