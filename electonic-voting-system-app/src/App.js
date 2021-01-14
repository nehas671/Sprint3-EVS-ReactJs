import './App.css';
import Home from './components/home'

import Officer from './components/electrorall_officer';
import ViewCandidates from './components/ViewCandidate';


import AddElection from './components/addElection'
import ViewResult from './components/viewresult'
import ShowElections from './components/viewElection'
import {AddResult} from './components/addresult';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import AddRequest from './components/addVoterRequest';

import AdminService from './components/adminService';
import Services from './components/login';
import VoterServices from './components/voter_services'

import AddParty from './components/add_party'
import RegisterUser from './components/register_user';
<<<<<<< HEAD



//import ButtonForm from './components/button';

=======
import AddCandidate from './components/addCandidate';
import ViewParty from './components/view_party';
import ViewVoterReq from './components/view_voterReq';
import ApproveRequest from './components/approve_request'
//import ButtonForm from './components/button';
>>>>>>> 51c90248901ed0643881e46dd0d8536e31b7d8f1




function App() {
  return(
    <div>


{/* <AddElection></AddElection>*/}

   { /*<ShowElections/>*/}

    
   { /*<AddElection></AddElection>*/}
   { /*<ViewCandidates></ViewCandidates>*/}

   
<<<<<<< HEAD

   { /* <CandidateForm></CandidateForm>*/}

=======
  
   {/*<CandidateForm></CandidateForm>*/}
>>>>>>> 51c90248901ed0643881e46dd0d8536e31b7d8f1
   {/*<CandidateForm></CandidateForm>*/}




   




   { /*<AddElection></AddElection>*/}
   {/* <ViewCandidates></ViewCandidates>*/}

   
   {/*<CandidateForm></CandidateForm>*/}
    
   {/*<RegisterUser></RegisterUser> */}
   {/*<Home></Home> */}
 
<<<<<<< HEAD
<AddResult></AddResult>

=======

{/*<AddResult></AddResult>*/}
>>>>>>> 51c90248901ed0643881e46dd0d8536e31b7d8f1
{/*<AddResult></AddResult>*/}

{/*<ButtonForm></ButtonForm>*/}
<ViewResult></ViewResult>
   {/*<Router>
   
    <div className="App">
      
 
{/*<ViewResult></ViewResult>*/}
 



   


  <div className="App">
      


           {/* <Link to="/"></Link>

            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to ="/add_candidate">Add </Link>&nbsp;&nbsp;
  <Link to ="/view_candidate">Show</Link>
  <Link to ="/view_candidate">Show</Link>*/}

<<<<<<< HEAD


=======
      <Switch>
>>>>>>> 51c90248901ed0643881e46dd0d8536e31b7d8f1

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
            <RegisterUser></RegisterUser>
          </Route>
<<<<<<< HEAD

        </Switch> */}



=======

          <Route exact path="/viewParty">
            <ViewParty></ViewParty>
          </Route>

          <Route exact path="/addParty">
            <AddParty></AddParty>
          </Route>

          <Route exact path="/viewVoterReq">
            <ViewVoterReq></ViewVoterReq>
          </Route>
          <Route exact path="/approveRequest">
            <ApproveRequest></ApproveRequest>
          </Route>
          <Route exact path="/addResult">
            <AddResult></AddResult>
          </Route>

          <Route exact path="/Officer_services">
            <Officer></Officer>
          </Route>

          
        </Switch> 

        
>>>>>>> 51c90248901ed0643881e46dd0d8536e31b7d8f1
            

       
        </div>       
           
</div>

    );
 
}

export default App;