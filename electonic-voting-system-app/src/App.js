import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import AddElection from './components/addElection'

import {AddResult} from './components/addresult';


import ShowElections from './components/viewElection'


import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import ViewResult from './components/viewresult';


function App() {
  return (
    <div className="App">

    {/*<Home></Home>*/}
   { /*<AddElection></AddElection>*/}
 <AddResult></AddResult>
  {/* <ViewResult></ViewResult>*/}

{/*
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
        </Switch> 
        </div>       
        </Router>


    */}
  { /*<AddElection></AddElection>*/}
   { /*<ShowElections/>*/}

    
   { /*<AddElection></AddElection>*/}
  


   </div>
  );


 
}

export default App;