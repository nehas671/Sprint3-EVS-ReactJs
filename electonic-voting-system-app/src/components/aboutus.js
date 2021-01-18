import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as regularicons from '@fortawesome/fontawesome-svg-core'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import AddElection from '../components/addElection'
import ShowElections from '../components/viewElection'

import Carouselcomponent from '../components/Carousel'
import Header from './header';
import Aside from './aside';
import Footer from './footer';
import Slogan from './slogan';


import Carousel from 'react-bootstrap/Carousel'

const Aboutus = (props) => {
    return (

      <div>

          <Router>
            <Link to="/election"></Link>
          
          
            <Link to="/showelection"></Link>
          
        </Router>

        <Header/>

    <main>

        <Slogan/>

        <section class="Custom-container technology-container">
            <div class="row mx-0 px-sm-0 mb-4  ">
                              

            <div class="col-8  pl-0 pr-5">



                <br>
                </br>
                <br>
                </br>
               


                <br></br>
                <br>
                </br>
                <h1 ><b>About Us</b></h1>
<b> Electronic Voting System is an election system  Website that facilitates voters to record their secure and secret ballot electronically. It has a friendly user interface and enables voters to cast their votes in few simple steps. We ensures the authenticity of the voters and the votes cast by them along with non-traceability of the casted vote. eVote's robust architecture has persistently manifested to be one of the most reliable, comprehensible and economical electronic voting solution.
<br></br>

</b>
<br></br>
<img  src={'aboutus2.png'} width="700" ></img>
            
            </div>
            
            <Aside/>
            

            </div>
        </section>          
       

    </main>

    <Footer/>





</div>
)
     
}
export default Aboutus;