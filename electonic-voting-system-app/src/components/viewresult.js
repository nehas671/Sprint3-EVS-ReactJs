
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import viewResultByStateNameAction from '../actions/viewResultByStateName';
import viewResultByElectionNameAction from '../actions/viewrResultByElectionName';
import viewAllResultAction from '../actions/viewAllResult';
import viewResultByPartyNameAction from '../actions/viewResultByPartyName';
import showVoteCountAction from '../actions/vote_count'
import viewByElectionNameAction from '../actions/viewByElectionName';

let dispatch
export const ViewResult= (props) => {
  dispatch = useDispatch();
    
  let resultList= useSelector(state=> state.resultReducer)
  const ResultList = () => {
    dispatch(viewAllResultAction())
  }
  React.useEffect(() => {
    ResultList()
  }, []);


    console.log("ResultList: ", resultList);
    if(!Array.isArray(resultList)) {
       resultList = [];
        console.log("Set resultList to blank array");
    }
   
    
    return (<div>


<h1 align='center'>View Result</h1>
<div class="col-9 border border-dark p-5 ml-auto mr-auto">
 
<form onSubmit={filterResult}>
  <div class=" form-group row">
    <label for="viewby" class="col-4 mr-3 font-weight-bold">View Result:</label>
    <select class="form-control col-7 state" id="viewby">
      <option value="election">Election Name</option>
      <option value="state">State Name</option>
      <option value="party">Party Name</option>
    </select>
  </div>

  <div class="form-group row ">
    <label for="viewbyfilter" class="col-4 col-form-label font-weight-bold">Enter Value</label>
    <div class="col-8">
      <input type="text"  class="form-control"  name="viewbyfilter" id="viewbyfilter" ></input>
    </div>
    <div class="col-2">

   <button id='btn1'>Search</button>
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
     </div> </div>);
      



    };


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
      
    }




/*

   
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
</div>
    );
};





function handleSearch(event) {
  event.preventDefault();
  const data = new FormData(event.target);
 
  console.log("in handle submit:",data)
  const val = data.get('viewbyfilter');

 var e = document.getElementById("viewby");
var selected = e.options[e.selectedIndex].val;
 console.log("value :",val);
 console.log("view selected",selected);
  if(selected==="election")
  {
    dispatch(viewResultByElectionNameAction(val));
  }else if(selected==="state")
  {
    dispatch(viewResultByStateNameAction(val));
  }else if(selected==="party")
  {
    dispatch(viewResultByPartyNameAction(val));
  }
}



export default ViewResult;


*/
export default ViewResult