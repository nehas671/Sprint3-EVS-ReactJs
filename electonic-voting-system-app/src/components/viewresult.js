
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import viewResultByStateNameAction from '../actions/viewResultByStateName';
import viewResultByElectionNameAction from '../actions/viewrResultByElectionName';
import viewAllResultAction from '../actions/viewAllResult';
import viewResultByPartyNameAction from '../actions/viewResultByPartyName';
import Header from './header';
import ViewElectionwiseAction from '../actions/viewElectionwise';
import ViewStatewiseAction from '../actions/viewStatewise';
import ViewPartywiseAction from '../actions/viewPartywise';
import Footer from './footer';
import showVoteCountAction from '../actions/vote_count'
import viewByElectionNameAction from '../actions/viewByElectionName';
import VoterAsideComponent from './voterAside';
import VoterHeader from './voterHeader';
import { useState } from 'react';

import Slogal from './slogan';

let dispatch
let selected;
let selectedview;
export const ViewResult= (props) => {

dispatch=useDispatch()
let [refine, setRefineList]=useState();
let [viewresult,setResultList ]=useState();
let resultList= useSelector(state=> state.resultReducer.viewresult)

let refineList=useSelector(state=>state.resultReducer.refine)

    console.log("ResultList: ", resultList);
    if(!Array.isArray(resultList)) {
       resultList = [];
        console.log("Set resultList to blank array");
    }

    if(!Array.isArray(refineList)) {
   
      refineList=[];
      console.log("Set refineList to blank array");
  }




  const showRefineList = (event) => {
    selected = event.target.value;
    console.log("Selected option: " + selected);
    if(selected === "State Name") {
        dispatch(ViewStatewiseAction())
        .then((response) => {
            console.log("REsponse: ", response);
            console.log("refineList: ", refineList);
            setRefineList(refineList);
        });
    } 
    
    else if(selected === "Election Name") {
        dispatch(ViewElectionwiseAction())
        .then((response) => {
            console.log("REsponse: ", response);
            console.log("refineList: ", refineList);
            setRefineList(refineList);
        });
    } 
    else if(selected === "Party Name") {
        dispatch(ViewPartywiseAction())
        .then((response) => {
          console.log("REsponse: ", response);
          console.log("refineList: ", refineList);
          setRefineList(refineList);
        });
    }
}







  function filterResult(event) {
    event.preventDefault();
    if(selected==="State Name")
    {
      dispatch(viewResultByStateNameAction(selectedview)).then((response)=>
      {
        console.log("REsponse: ", response);
          console.log("resultList: ", resultList);
          setResultList(resultList);
      });    
    }
    else if(selected==="Election Name")
    {
      dispatch(viewResultByElectionNameAction(selectedview)).then((response)=>
      {

        console.log("REsponse: ", response);
        console.log("resultList: ", resultList);
        setResultList(resultList);
      }    
      );
    }else if(selected==="Party Name")
    {
      dispatch(viewResultByPartyNameAction(selectedview)).then((response)=>
      {
        console.log("REsponse: ", response);
        console.log("resultList: ", resultList);
        setResultList(resultList);
      }
      );
    }
    else if(selected==="All Result")
    {
      dispatch(viewAllResultAction()).then((response)=>
      {
        console.log("REsponse: ", response);
        console.log("resultList: ", resultList);
        setResultList(resultList);
      });
    }
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
<label for="viewby" class="col-4 mr-3 font-weight-bold">View Result By:</label>
<select class="form-control col-7 state" id="viewby"  onChange={showRefineList} >
      <option > Election Name</option>
      <option > State Name</option>
      <option > Party Name</option>
      <option >All Result</option>
    </select>
  </div>



  <div class=" form-group row">
  <label for="viewbyfilter" class="col-4 mr-3 font-weight-bold">Select:</label>
  <select id="viewbyfilter" onChange={handleRefine} required class="w-50 form-control">
    <option>select</option>
    {renderRefineList(refineList)}
     </select>
   </div>
     
<center><button type="submit" class="btn btn-outline-primary mb-3 ml-5 mr-5">Search</button></center>
  
  

    
    
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
    

    

     function handleRefine(event)
     {
     selectedview = event.target.value
  console.log("Selected view: " + selectedview);
     }



     function renderRefineList(refineList) {
       
      return refineList.map((value) => {
          return (
              <option value = {value}>{value}</option>
          )
      })

     }


export default ViewResult