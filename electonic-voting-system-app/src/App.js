import logo from './logo.svg';
import './App.css';

import RegisterUser from './components/register_user';
import AddCandidate from './components/addCandidate';
import ApproveRequest from './components/approve_request';
import AddVoterRequest from './components/add_voter_request';

import Home from './components/home'
import AddElection from './components/addElection'

import ShowElections from './components/viewElection'
import AddResult from './components/addresult';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";


function App() {
  return (
    <div className="App">


    <RegisterUser></RegisterUser>

    <Home></Home>
  
  { /*<AddElection></AddElection>*/}
   { /*<ShowElections/>*/}


    
   { /*<AddElection></AddElection>*/}
  

   </div>
  );


 
}

export default App;