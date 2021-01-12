import './App.css';

import ApproveRequest from './components/approve_request';
import AddVoterRequest from './components/add_voter_request';
import Home from './components/home'
import Officer from './components/electrorall_officer';
import AddCandidate from './components/candidateForm';
import ViewCandidates from './components/ViewCandidate';


function App() {
  return (
    <div className="App">
{
  /*<Home></Home>
  <AddCandidate></AddCandidate>
  */
}
    <ViewCandidates></ViewCandidates>
    
    </div>
  );
}

export default App;
