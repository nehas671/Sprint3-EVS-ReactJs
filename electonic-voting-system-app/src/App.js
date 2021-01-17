import './App.css';
import Home from './components/home'

import OfficerService from './components/officerService';
import ViewCandidates from './components/ViewCandidate';


import AddElection from './components/addElection'
import ViewResult from './components/viewresult'
import ShowElections from './components/viewElection'
import {AddResult} from './components/addresult';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import AddRequest from './components/addVoterRequest';
import viewParty from './components/view_party';

import AdminService from './components/adminService';
import Services from './components/login';

import VoterServices from './components/voter_services'

import AddParty from './components/add_party'
import Registeruser from './components/register_user';
import AddCandidate from './components/addCandidate';
import ViewParty from './components/view_party';
import ViewVoterReq from './components/view_voterReq';
import CastVote from './components/castVote';
import ViewVoterId from './components/viewVoterId';
import DeleteCandidate from './components/deleteCandidate'
import DeleteResult from './components/deleteResult'
import ViewSchedule from './components/show_schedule'
import ShowSchedules from './components/schedule';
import EvsLogin from './components/evslogin'
//import ButtonForm from './components/button';
import MultipleLoginComponent from './components/Multilogin'
import LoginUserComponent from './components/LoginUser'





function App() {
  return(
    <div>
 

 
 {/*<RegisterUser></RegisterUser>*/}

{/* <AddElection></AddElection>*/}

   { /*<ShowElections/>*/}

    
   { /*<AddElection></AddElection>
   <ViewCandidates></ViewCandidates>*/}

   

   {/*<CandidateForm></CandidateForm>
    
   

  

   {/*<CandidateForm></CandidateForm>*/}
   {/*<CandidateForm></CandidateForm>*/}




   { /*<AddElection></AddElection>
   <ViewCandidates></ViewCandidates>*/}

   
   {/*<CandidateForm></CandidateForm>
    
   <RegisterUser></RegisterUser>
   <Home></Home>*/}
 

{/*<AddResult></AddResult>*/}


{/*<AddResult></AddResult>*/}

{/*<ButtonForm></ButtonForm>*/}
{/*<ViewResult></ViewResult>*/}
   {/*<Router>
   
    <div className="App">
      
 

{/*<ViewResult></ViewResult>*/}

 



   


  <div className="App">
      


            <Link to="/"></Link>

           {/* <Link to="/">Home</Link>&nbsp;&nbsp;


           {/* <Link to="/"></Link>
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to ="/add_candidate">Add </Link>&nbsp;&nbsp;
  <Link to ="/view_candidate">Show</Link>
  <Link to ="/view_candidate">Show</Link>*/}


     <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          <Route path="/admin_services">
            <AdminService/>
          </Route>
          <Route path="/VoterServices">
          <VoterServices/>
          </Route>
          <Route path="/add_candidate">
            <AddCandidate/>
          </Route>
          <Route path="/view_candidate">
          <ViewCandidates/>
          </Route>
          <Route path="/election">
          <AddElection/>
          </Route>
          <Route path="/showelection">
          <ShowElections/>
          </Route>
          <Route exact path="/RegisterUser">

            <Registeruser></Registeruser>

          </Route>

          <Route exact path="/viewParty">
            <ViewParty></ViewParty>
          </Route>


          <Route exact path="/addParty">
            <AddParty></AddParty>
          </Route>

          <Route exact path="/viewVoterReq">
            <ViewVoterReq></ViewVoterReq>
          </Route>


          <Route exact path="/addResult">
            <AddResult></AddResult>
          </Route>

          <Route exact path="/viewResult">
            <ViewResult/>
          </Route>

          <Route exact path="/viewVoterId">
            <ViewVoterId/>
          </Route>


          <Route exact path="/deleteresult">
            <DeleteResult/>
          </Route>


          <Route exact path="/viewSchedule">
            <ShowSchedules/>
          </Route>


          


          <Route exact path="/Officer_services">
            <OfficerService></OfficerService>
          </Route>
          <Route exact path='/votecast'>
            <CastVote />
          </Route>

            <Route exact path ="/deleteCandidate">
            <DeleteCandidate/>
            </Route>
            

            <Route exact path ="/addVoterReq">
            <AddRequest/>
            </Route>

            

         
          <Route exact path="/addVoterRequest">
            <AddRequest></AddRequest>
          </Route>

          <Route exact path="/try">
            <EvsLogin></EvsLogin>
</Route>

          <Route exact path="/evslogin">
          <MultipleLoginComponent/>
          </Route>

          
          <Route exact path="/loginuser">
          <LoginUserComponent/>
          </Route>

                   

     </Switch> 

         
  
            

       
        </div>       


  

        </div>   );

 
}

export default App;