import './App.css';
import Home from './components/home'

import Officer from './components/electrorall_officer';
import ViewCandidates from './components/ViewCandidate';


import AddElection from './components/addElection'
import ViewResult from './components/viewresult'
import ShowElections from './components/viewElection'
import {AddResult} from './components/addresult';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import CandidateForm from './components/candidateForm';
import AddRequest from './components/addVoterRequest';

import AdminService from './components/adminService';
import Services from './components/login';
import VoterServices from './components/voter_services'


import RegisterUser from './components/register_user';


<<<<<<< HEAD
=======
//import ButtonForm from './components/button';
>>>>>>> d95d119c0069a3dcde92158a33be2a44f8068a54




function App() {
  return(
    <div>


{/* <AddElection></AddElection>*/}

   { /*<ShowElections/>*/}

    
   { /*<AddElection></AddElection>
   <ViewCandidates></ViewCandidates>*/}

   
<<<<<<< HEAD
   <CandidateForm></CandidateForm>
=======
   {/*<CandidateForm></CandidateForm>*/}




   

>>>>>>> d95d119c0069a3dcde92158a33be2a44f8068a54


   { /*<AddElection></AddElection>
   <ViewCandidates></ViewCandidates>*/}

   
   {/*<CandidateForm></CandidateForm>
    
   <RegisterUser></RegisterUser>
   <Home></Home>*/}
 
<<<<<<< HEAD
<AddResult></AddResult>
=======
{/*<AddResult></AddResult>*/}
>>>>>>> d95d119c0069a3dcde92158a33be2a44f8068a54

{/*<ButtonForm></ButtonForm>*/}
{/*<ViewResult></ViewResult>*/}
   {/*<Router>
   
    <div className="App">
      
 

{/*<ViewResult></ViewResult>*/}
 



   


    <div className="App">
      


            <Link to="/"></Link>

           {/* <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to ="/add_candidate">Add </Link>&nbsp;&nbsp;

  <Link to ="/view_candidate">Show</Link>

  <Link to ="/view_candidate">Show</Link>*/}

<<<<<<< HEAD
=======

>>>>>>> d95d119c0069a3dcde92158a33be2a44f8068a54


{/*      <Switch>
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
            <CandidateForm/>
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
>>>>>>> d95d119c0069a3dcde92158a33be2a44f8068a54
            

       
        </div>       
           


  
        </div>   );
 
}

export default App;
