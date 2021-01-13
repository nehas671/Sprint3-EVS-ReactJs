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
import ShowSchedules from './schedule';

import Carousel from 'react-bootstrap/Carousel'
const Schedule2 = (props) => {
    return (

      <div>

<header class="Custom-container py-md-2 py-3   ">
  <div class="header-before"><span class="mr-4"><img src="logo.jpg" alt="brand-name" class="logo"/></span><h1 class="d-inline">Electronic Voting System</h1></div>
        <nav class="navbar navbar-expand-md  navbar-light d-md-block d-lg-flex px-sm-0 py-0 text-wrap ">


            {/*<div class="navbar-brand nav-custom-brand mb-3 mb-md-0 py-0">
                
    </div>*/}
            <button class="navbar-toggler  custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav flex-wrap w-100">
                    <li class="nav-item  nav-item-custom mb-2 mb-md-0 flex-wrap ">
                        <a class="nav-link text-dark border-primary nav-custom-link px-md-0 " href="#">Home</a>
                    </li>
                    <li class="nav-item  nav-item-custom  mb-2 mb-md-0 flex-wrap ">
                        <a class="nav-link text-dark px-md-0 border-primary nav-custom-link  " href="#">About Us</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0  border-primary  nav-custom-link " href="#">Schedule</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0 border-primary  nav-custom-link" href="#">Contact Us</a>
                    </li>
                    
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="#">FAQ</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="#">Logout</a>
                    </li>
                </ul>

                <div class=" d-flex sky-color search-box ">
                    <input type="search" class=" border-0 sky-color  ml-md-auto" placeholder="search..."></input>
                    <div class="">
                        <button class=" btn search-button border-0 sky-color " type="button" id="search-button" ><FontAwesomeIcon icon={icons.faSearch} /></button>
                    </div>
                </div>


            </div>
        </nav>


    </header>


    <main>

        <Slogan/>

        <section class="Custom-container technology-container">
            <div class="row mx-0 px-sm-0 mb-4  ">
                              

            <div class="col-8  pl-0 pr-5">
            
        <ShowSchedules></ShowSchedules>
        
            </div>
            
            <Aside/>
            

            </div>
        </section>          
       

    </main>

    <Footer/>
    </div>)
}
export default Schedule2;