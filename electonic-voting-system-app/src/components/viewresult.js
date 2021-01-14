
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import viewResultByStateNameAction from '../actions/viewResultByStateName';
import viewResultByElectionNameAction from '../actions/viewrResultByElectionName';
import viewAllResultAction from '../actions/viewAllResult';
import viewResultByPartyNameAction from '../actions/viewResultByPartyName';
import Header from './header';

import Footer from './footer';
import showVoteCountAction from '../actions/vote_count'
import viewByElectionNameAction from '../actions/viewByElectionName';
import VoterAsideComponent from './voterAside';
import VoterHeader from './voterHeader';

import Slogal from './slogan';

let dispatch
export const ViewResult= (props) => {
  dispatch = useDispatch();
    
  let resultList= useSelector(state=> state.resultReducer.viewresult)
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
 
 <VoterHeader />
 <main>
 <Slogal/>
          

                <section class="Custom-container technology-container">
            <div class="row mx-0 px-sm-0 mb-4">
            <div class="col-8  pl-0 pr-5">
            <div class="col border border-dark bg-light p-5 ml-auto mr-auto">
              <h2 class="addElectionTitle"> View Election Result</h2>
<form onSubmit={filterResult}>

<div class=" form-group row">
<label for="viewby" class="col-4 mr-3 font-weight-bold">View Result:</label>
<select class="form-control col-7 state"  id="viewby">
      <option value="election"> By Election Name</option>
      <option value="state"> By State Name</option>
      <option value="party"> By Party Name</option>
      <option value="view">All Result</option>
    </select>
  </div>



  <div class="form-group row pt-4 pb-3">
  <label for="viewbyfilter" class="col-4 col-form-label font-weight-bold">Enter Value</label>
  <div class="col-8">
  <input type="text"  class="form-control"  name="viewbyfilter" id="viewbyfilter" ></input>

  </div>
</div>

     
<center><button type="submit" class="btn btn-outline-primary mb-3 ml-5 mr-5">Search</button></center>
  
  

    
    <div class="col-4">
    <table class="table table-border table-striped">
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


</form>
    </div>
    </div>
    <aside class="col-4  rounded  pr-0  aside-custom d-flex justify-content-center">
                        <VoterAsideComponent/>
                    </aside>
                
                </div>
              
            </section>
            </main>
       
        <Footer/>

</div>);
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
      else if(selected=="view")
      {
        dispatch(viewAllResultAction())
      }
    }



export default ViewResult