import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import viewReqByDistrictAction from '../actions/viewReqByDistrict';
import viewReqByStatusAction from '../actions/viewReqByStatus';
import ViewVoterReqAction from '../actions/view_voterReq' 
import Header from '../components/header';
import Aside from './aside';
import Footer from './footer';
import Slogan from './slogan';

let dispatch
const ViewVoterReq =(props)=>{

    let voterList=useSelector(state=>state.officerReducer);
     dispatch =useDispatch();
   /* React.useEffect(()=>{
        VoterList()
    },[]);
    const VoterList=()=>{
        dispatch(ViewVoterIdAction())
    }*/
    console.log("List:",voterList);
    if(!Array.isArray(voterList)){
        voterList=[];
        console.log("set to null array");
    }
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
                             <label for="name" class="col-form-label font-weight-bold">Enter choice:</label>
                             <input type='text' class='form-control' id='name' name='name' placeholder='Enter value'></input>
                         </div>
                         

                         <div class='form-inline row'>
                             <label for='view' class='col-4 mr-3 font-weight-bold'>Select to view By:</label>
                             <select class= "form-control col-5" id='view'>
                                 <option value='' selected disabled hidden>--Select--</option>
                                 <option value='viewAll'>View All</option>
                                 <option value='status'>Status</option>
                                 <option value='district'>District</option>
                             </select>
                         </div>
                        
                         <div class='col-2'>
                             <button>Search</button>
                         </div>
                         
                     </div>
                 </form>
                     <h2 class='font-weight-bold'>Voter Request List</h2>
                     <table class= 'table table-border table-striped'>
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
                   </div>
                   
            </div>
            
            <Aside/>
            

            </div>
        </section>          
       

    </main>

    <Footer/>





</div>
)
    };
function renderTableData(voterList){
    console.log("list:",voterList);
    return voterList.map((voter,index)=>{
        const{user_id,name,dob,district,voter_id,status}=voter;
        return(
            <tr key={user_id}>
                <td>{user_id}</td>
                <td>{name}</td>
                <td>{dob}</td>
                <td>{district}</td>
                <td>{voter_id}</td>
                <td>{status}</td>
                <td><Button as="input" type="button" value="approve/reject"></Button>
        
            </td>
            </tr>
        )
    })
    
};
function handleSearch(event){
    event.preventDefault();
    const data = new FormData(event.target);

    console.log("in handle:",data);
    const value=data.get("name");

    var e=document.getElementById("view");
    var selected=e.options[e.selectedIndex].value;
    console.log('value: ',value);
    console.log("selected:",selected);

    if(selected==='viewAll'){
        dispatch(ViewVoterReqAction());
    }
    else if(selected==='district'){
        dispatch(viewReqByDistrictAction(value));

    }
    else if(selected==='status'){
        dispatch(viewReqByStatusAction(value));

    }
}
export default ViewVoterReq;