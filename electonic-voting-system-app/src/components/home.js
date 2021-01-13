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

const Home = (props) => {
    
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

        <Carouselcomponent></Carouselcomponent>
            
            </div>
            
            <Aside/>
            

            </div>
        </section>          
       

    </main>

    <Footer/>





</div>
)



      
        
      
}

export default Home;


