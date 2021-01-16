
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Header from './header';

import Footer from './footer';
import Aside from './aside';
 import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useHistory } from "react-router-dom";
import resultReducer from '../reducers/resultReducer';
import AdminHeader from './adminheader';
import Slogal from './slogan';
import deleteResultAction from '../actions/delete_result';
import viewAllDeleteAction from '../actions/viewaAlldelete';
import AdminAsideComponent from './adminAside';



let history;
let dispatch
 const DeleteResult= (props) => {


 
   dispatch = useDispatch();


   history = useHistory();
  let resultList = useSelector(state => state.resultReducer.viewall);
 
  React.useEffect(() => {
    ResultList()
  }, []);

  const ResultList = () => {
    dispatch(viewAllDeleteAction())
  }
console.log("resultList: ", resultList);
if(!Array.isArray(resultList)) {
    resultList = [];
    console.log("Set resultList to blank array");
}

   return (<div>
<AdminHeader></AdminHeader>
    <main>
      
<Slogal></Slogal>

        <section class="Custom-container technology-container">
            <div class="row mx-0 px-sm-0 mb-4">
            <div class="col-10 pl-0 ml-auto mr-auto">
            <div class=" border border-dark bg-light ">
              <h2 class="addElectionTitle">Delete Election Result</h2>

              <br></br>
              <form >
 

 
      <table class="table table-border table-striped  ">
      <thead>
            <tr>
<th>Result Id</th>               
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
    {renderTableData(resultList)}
    </tbody>
</table>

</form>
</div>
            </div>            
               
            </div>
        </section>
    </main>
   <Footer/>

    </div>);

}






function renderTableData(resultList ) {
  return resultList.map((resultList, index) => {
       const { result_id ,election_name, state,date, candidate_name, party_name, constituency, votes} = resultList //destructuring
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


  <td> <div class="btn-group" role="group" aria-label="Basic mixed styles example">
             {/*<button type="button" class="btn btn-outline-warning" onClick={(e) => updateCandidate(e, candidate)}>Edit</button>*/}
             <button   class="btn btn-outline-primary mb-3"  onClick={() => deleteResult( result_id)}>Delete</button>
             </div>
            </td>
          </tr>
       )
    })
  };





    function deleteResult( result_id)
    {
  
   dispatch(deleteResultAction(result_id))  
   history.push('/deleteresult')  
   }


    export default DeleteResult;