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
import RegisterUser from './components/register_user';
import ButtonForm from './components/button';
function App() {
  return(
    <div>


{/* <AddElection></AddElection>*/}

   { /*<ShowElections/>*/}

    
   { /*<AddElection></AddElection>
   <ViewCandidates></ViewCandidates>*/}

   
   {/*<CandidateForm></CandidateForm>*/}



    
   { /*<AddElection></AddElection>
   <ViewCandidates></ViewCandidates>*/}

   
   {/*<CandidateForm></CandidateForm>
    
   <RegisterUser></RegisterUser>
   <Home></Home>*/}
 
{/*<AddResult></AddResult>*/}
<ButtonForm></ButtonForm>
{/*<ViewResult></ViewResult>*/}
   {/*<Router>
   
    <div className="App">
      
 
            <Link to="/"></Link>

           {/* <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to ="/add_candidate">Add </Link>&nbsp;&nbsp;
  <Link to ="/view_candidate">Show</Link>

      <Switch>
          <Route exact path="/">
            <Home/>
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
        </Switch> */}
            
  
        </div>   );
 
}

export default App;
