import './App.css';
import Home from './components/home'

import Officer from './components/electrorall_officer';
import ViewCandidates from './components/ViewCandidate';
import AddCandidate from './components/addCandidate';

import AddElection from './components/addElection'
import ViewResult from './components/viewresult'
import ShowElections from './components/viewElection'
import {AddResult} from './components/addresult';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import CandidateForm from './components/candidateForm';
import AddRequest from './components/addVoterRequest';

import AdminService from './components/adminService';
import Services from './components/login';



import RegisterUser from './components/register_user';
<<<<<<< HEAD
import ButtonForm from './components/button';
=======


>>>>>>> e437de086e34073815da23f2b79c6c629b496791
function App() {
  return(
    <div>


{/* <AddElection></AddElection>*/}

   { /*<ShowElections/>*/}

    
   { /*<AddElection></AddElection>
   <ViewCandidates></ViewCandidates>*/}

   
   {/*<CandidateForm></CandidateForm>*/}

<<<<<<< HEAD

=======
   
>>>>>>> e437de086e34073815da23f2b79c6c629b496791


   { /*<AddElection></AddElection>
   <ViewCandidates></ViewCandidates>*/}

   
   {/*<CandidateForm></CandidateForm>
    
   <RegisterUser></RegisterUser>
   <Home></Home>*/}
 
{/*<AddResult></AddResult>*/}
<<<<<<< HEAD
<ButtonForm></ButtonForm>
{/*<ViewResult></ViewResult>*/}
   {/*<Router>
   
    <div className="App">
      
 
=======
{/*<ViewResult></ViewResult>*/}
 



   


    <div className="App">
      

>>>>>>> e437de086e34073815da23f2b79c6c629b496791
            <Link to="/"></Link>

           {/* <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to ="/add_candidate">Add </Link>&nbsp;&nbsp;
<<<<<<< HEAD
  <Link to ="/view_candidate">Show</Link>
=======
  <Link to ="/view_candidate">Show</Link>*/}

>>>>>>> e437de086e34073815da23f2b79c6c629b496791

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
        </Switch> 
        </div>       
           

>>>>>>> e437de086e34073815da23f2b79c6c629b496791
  
        </div>   );
 
}

export default App;
