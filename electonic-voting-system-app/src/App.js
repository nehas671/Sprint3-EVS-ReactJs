import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import AddElection from './components/addElection'
import AddResult from './components/addresult';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import AddCandidate from './components/addCandidate';
import AddVoterRequest from './components/add_voter_request';
import ApproveRequest from './components/approve_request';
import Officer from './components/electrorall_officer';
import AddRequest from './components/add_voter_request'
import CastVote from './components/castVote';


function App() {
  return (
    <div className="App">

    <Home></Home>
    
    

    </div>

    
   
  
   
  );


 
}

export default App;