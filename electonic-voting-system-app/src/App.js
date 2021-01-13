import './App.css';
import Home from './components/home'

import Officer from './components/electrorall_officer';
import AddCandidate from './components/candidateForm';
import ViewCandidates from './components/ViewCandidate';

import AddElection from './components/addElection'

import ShowElections from './components/viewElection'
import AddResult from './components/addresult';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import CandidateForm from './components/candidateForm';
import AddRequest from './components/addVoterRequest';
import RegisterUser from './components/register_user';


function App() {
  return(
    <div>

{/* <AddElection></AddElection>*/}
   { /*<ShowElections/>*/}

    
   { /*<AddElection></AddElection>
   <ViewCandidates></ViewCandidates>*/}

   
   {/*<CandidateForm></CandidateForm>*/}
    

   <Router>
    <div className="App">
      
            <Link to="/"></Link>

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
        </Switch> 
        </div>       
        </Router>
        
    </div>
  );
}




export default App;