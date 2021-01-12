import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import AddElection from './components/addElection'
import {AddResult} from './components/addresult';
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import ViewResult from './components/viewresult';


function App() {
  return (
    <div className="App">
    {/*<Home></Home>*/}
   { /*<AddElection></AddElection>*/}
 <AddResult></AddResult>
  {/* <ViewResult></ViewResult>*/}
   </div>
  );


 
}

export default App;