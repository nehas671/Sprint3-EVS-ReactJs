
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import viewResultByStateNameAction from '../actions/viewResultByStateName';
import viewResultByElectionNameAction from '../actions/viewrResultByElectionName';
import viewAllResultAction from '../actions/viewAllResult';
import viewResultByPartyNameAction from '../actions/viewResultByPartyName';
import Header from './header';
import Slogal from './slogan';
import Footer from './footer';
import showVoteCountAction from '../actions/vote_count'
import viewByElectionNameAction from '../actions/viewByElectionName';



let dispatch
export const ViewResult= (props) => {
  dispatch = useDispatch();
    
  let resultList= useSelector(state=> state.resultReducer)
  /*const ResultList = () => {
    dispatch(viewAllResultAction())
  }
  React.useEffect(() => {
    ResultList()
  }, []);*/

    console.log("ResultList: ", resultList);
    if(!Array.isArray(resultList)) {
       resultList = [];
        console.log("Set resultList to blank array");
    }
    return (<div>
      
<div class="container col-6 pt-5">
<form onSubmit={filterResult}>
  <div class="form-group row ">
   
  <div class=" form-inline row">
    <label for="viewby" class="col-4 mr-3 font-weight-bold">View Result:</label>
    <select class="form-control col-5 " id="viewby">
      <option value="election"> By Election Name</option>
      <option value="state"> By State Name</option>
      <option value="party"> By Party Name</option>
      <option value="view">All Result</option>
    </select>
  </div>


  <div class="form-inline col-5">
    <label for="viewbyfilter" class="col-form-label font-weight-bold">Enter Value</label>
      <input type="text"  class="form-control"  name="viewbyfilter" id="viewbyfilter" ></input>
  </div>
     

  <div class="col-2">
  <button>Search</button>
  </div>


  
  </div>
  </form>
    <center>


    <h2 class="font-weight-bold">Result List</h2>
    
    
    <table class="table table-hover col-12" >
        <thead>
          
            <tr>
                <th>ResultId</th>
<th>Election Name</th>
<th>State</th> 
<th>Date</th>
<th>Candidate Name</th>
<th>Party Name</th>
<th>Constituency</th>
<th> Votes</th>
  </tr>
</thead>
<tbody>
  {renderResult(resultList)}
</tbody>
</table>


</center>
    </div>
</div>);
};




{/*<Header>
</Header>
<Slogal></Slogal>
<h1 align='center'>View Result</h1>
<div class="col-9 border border-dark p-5 ml-auto mr-auto">
<form onSubmit={filterResult}>
  <div class=" form-group row">
    <label for="viewby" class="col-4 mr-3 font-weight-bold">View Result:</label>
    <select class="form-control col-7 state" id="viewby">
      <option value="election"> View By Election Name</option>
      <option value="state"> View By State Name</option>
      <option value="party"> View By Party Name</option>
      <option value="view">View All Result</option>
    </select>
  </div>

  <div class="form-group row ">
    <label for="viewbyfilter" class="col-4 col-form-label font-weight-bold">Enter Value</label>
    <div class="col-4" >
      <input type="text"  class="form-control"  name="viewbyfilter" id="viewbyfilter" ></input>
      <br></br>
      <button align='center' id='btn1'>Search</button>
    </div>
    <div class="col-8 pl-7" >
    </div>
  </div>

</form>

          <h2 class="font-weight-bold " >Result</h2>
          <div class='table  border border-dark col-12'>
      <table class="table table-hover col-12" >
        <thead>
          
            <tr>
                <th>ResultId</th>
<th>Election Name</th>
<th>State</th> 
<th>Date</th>
<th>Candidate Name</th>
<th>Party Name</th>
<th>Constituency</th>
<th> Votes</th>
  </tr>
</thead>
<tbody>
  {renderResult(resultList)}
</tbody>
</table>
         
          </div>
     </div>
     
     <Footer/>
      </div>);
    }*/}


    function renderResult(resultList) {
      console.log("resultList: ", resultList);
      return resultList.map((result, index) => {
         const { result_id, election_name,state,date ,candidate_name,party_name,constituency,votes} = result
         return (
            <tr key={result_id}>
              <td>{result_id}</td>
               <td>{election_name}</td>
               <td>{state}</td>
               <td>{date}</td>
               <td>{candidate_name}</td>
               <td>{party_name}</td>
               <td>{constituency}</td>
               <td>{votes}</td>
            </tr>
         )
      })
    };
    
    
    function filterResult(event) {
      event.preventDefault();
      const data = new FormData(event.target);
     
      console.log("in handle submit:",data)
      const value = data.get('viewbyfilter');
    
     var e = document.getElementById("viewby");
    var selected = e.options[e.selectedIndex].value;
     console.log("value :",value);
     console.log("view selected",selected);
      if(selected==="state")
      {
        dispatch(viewResultByStateNameAction(value));
      }
      else if(selected==="election")
      {
        dispatch(viewResultByElectionNameAction(value));
      }else if(selected==="party")
      {
        dispatch(viewResultByPartyNameAction(value));
      }
      else if(selected=="view")
      {
        dispatch(viewAllResultAction())
      }
    }



export default ViewResult