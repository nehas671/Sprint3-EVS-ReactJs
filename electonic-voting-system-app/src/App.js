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


function App() {
  return(
    <div>


{/* <AddElection></AddElection>*/}
   

    
   { /*<AddElection></AddElection>
   <ViewCandidates></ViewCandidates>*/}

   
   {/*<CandidateForm></CandidateForm>
    




   <RegisterUser></RegisterUser>

   <Home></Home>*/}
 
{/*<AddResult></AddResult>*/}
<ViewResult></ViewResult>
   {/*<Router>



   

    <div className="App">
      
<<<<<<< HEAD
            <Link to="/"></Link>
=======
           {/* <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to ="/add_candidate">Add </Link>&nbsp;&nbsp;
  <Link to ="/view_candidate">Show</Link>*/}
>>>>>>> d4883cb74461d59971c797eca3aa796a184a36ef

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
          <Route exact path="/addVoterRequest">
            <AddRequest></AddRequest>
          </Route>
        </Switch> 
        </div>       
           

  { /*<AddElection></AddElection>*/}
   { /*<ShowElections/>*/}


    
   { /*<AddElection></AddElection>*/}
  

   </div>);
 
}

export default App;