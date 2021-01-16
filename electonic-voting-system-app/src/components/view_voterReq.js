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

let dispatch;
let selectedview;
let selectedOption;
const ViewVoterReq = (props) => {

  let [filter, setFilter] = useState();
  let [initialState, setInitialState] = useState();
  let voterList = useSelector(state => state.officerReducer.initialState);

  let filterList = useSelector(state => state.officerReducer.filter);
  
   dispatch = useDispatch();

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
          <div class="col-8  border border-dark pl-0 pr-5 bg-light">

          <div class="container pt-5 px-5 ">
            
          <h3 class="addElectionTitle mb-3">VIEW  VOTER REQUEST</h3>
          <form onSubmit={handleSearch} class="d-flex mb-4">
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
                  <button className="btn btn-primary">Search</button>
                  </div>
                  
           
            
            </form>
          <center>
          <h2 class="font-weight-bold">voter request List</h2>
          
          <table class="table table-border table-striped">
          <thead>
              <tr>
              <th>UserId</th>
              <th>Name</th>
            <th>date of birth</th>
            <th>District</th>
            <th>VoterId</th>
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
          
          <Aside/>
          

          </div>
      </section>          
     

  </main>

<Footer/>

  </div>

   
     
);
};



function renderTableData(voterList) {
  console.log("voterList: ", voterList);
  return voterList.map((voter, index) => {
     const { user_id,name,dob,district,voter_id,status} = voter //destructuring
     return (
        <tr key={user_id}>
                <td>{user_id}</td>
                <td>{name}</td>
                <td>{dob}</td>
                <td>{district}</td>
                <td>{voter_id}</td>
                <td>{status}</td>
                <td><Button as="input" type="button" value="approve"><a href="/approveRequest"></a></Button></td>
                <td><Button as="input" type="button" onClick = {rejectVoterRequest} value="reject"></Button></td>
        </tr>
     )
  })
};

function aproveVoterRequest(event) {
  /*
  console.log("In Request Approve :",event.voterRequest)
  const name = event.voterRequest.name;
  const constituency = event.get('constituency');
  const emailId= event.get('emailId');
  const applicationStatus = "Approved";
  const contactNumber = event.get('contactNumber');
  const dob = event.get('dob');
  console.log(dob);
  
  
  dispatch(ApproveRequestAction(event.voterRequest)).then((response) => {
    event.AddVoterRequest();
  }) */
}
function rejectVoterRequest(event) {
  console.log('Update product: ', event.voterRequest);
  event.preventDefault();

  const data = new FormData(event.target);
  console.log("In Request Approve :",data)
  const name = data.get('name');
  const constituency = data.get('constituency');
  const emailId= data.get('emailId');
  const applicationStatus = "Rejected";
  const contactNumber = data.get('contactNumber');
  const dob = data.get('dob');
  console.log(dob);
  
  dispatch(ApproveRequestAction(event.voterRequest)).then((response) => {
    event.AddVoterRequest();
  })
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

export  default ViewVoterReq;