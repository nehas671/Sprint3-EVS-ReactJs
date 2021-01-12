import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import AddElection from './components/addElection'
import ShowElections from './components/viewElection'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
    {/*<Home></Home>*/}
   {/*<AddElection></AddElection>*/}
    <ShowElections/>
   </div>
  );


 
}

export default App;
