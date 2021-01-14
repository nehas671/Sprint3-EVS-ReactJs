import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import viewVoterIdAction from '../actions/viewVoterId'
import Header from '../components/header';
import Aside from './aside';
import Footer from './footer';
import Slogan from './slogan';

let dispatch;
let voterlist
const ViewVoterId =(props)=>{    
     voterlist= useSelector(state=>state.userReducer);
     dispatch =useDispatch();
    console.log("List outside:",voterlist);
    return (
    <div>

        <Header/>

    <main>
        <Slogan></Slogan>

        <section class="Custom-container technology-container">
            <div class="row mx-0 px-sm-0 mb-4  ">
                              

            <div class="col-8  pl-0 pr-5">

            <div class="col border border-dark bg-light p-5 ml-auto mr-auto">

             
                 <form onSubmit={handleSearch}>
                     <div class='form-group row pt-4 pb-3'>
                         <div class="form-inline col-5">
                             <label htmlFor="id" class="col-form-label font-weight-bold">Enter User id:</label>
                             <input type='text' class='form-control' id='id' name='id' placeholder='Enter value'></input>
                         </div>
                        
                         <div class='col-2'>
                             <button>Search</button>
                         </div>   
                     </div>
                 </form>
                     <h2 class='font-weight-bold'>Voter Id List</h2>
                     <table class= 'table table-border table-striped'>
                         <thead>
                             <tr>
                             <th>UserId</th>
                            <th>Name</th>
                            <th>date of birth</th>
                            <th>VoterId</th>
                            <th>Status</th>
                             </tr>
                         </thead>
                         <tbody>
                             {renderTableData(voterlist)}
                         </tbody>
                     </table>
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


function renderTableData(voterlist){

    console.log("list inside:",voterlist);
    
        return(
            <tr key={voterlist.user_id}>
                <td>{voterlist.user_id}</td>
                <td>{voterlist.name}</td>
                <td>{voterlist.dob}</td>
                <td>{voterlist.voter_id}</td>
                <td>{voterlist.status}</td>
           </tr>
        )
    };

function handleSearch(event){
    event.preventDefault();
  const data = new FormData(event.target);
 
  console.log("in handle submit:",data)
  const value = data.get('id');
    console.log("value:",value)
    dispatch(viewVoterIdAction(value));
}
export default ViewVoterId;