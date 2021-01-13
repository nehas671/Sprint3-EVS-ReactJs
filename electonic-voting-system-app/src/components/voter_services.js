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
const VoterServices = (props) => {
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
                        <a class="nav-link text-dark px-md-0  border-primary  nav-custom-link " href="#">
                        <select >
                        <option value="" selected disabled hidden>Voter Services</option>
                        <option value="VoterRequest" >Add Voter Request</option>
                        <option value="voterId" >View Voter ID</option>
                        <option value="schedule" >View Schedule</option>
                        <option value="candidate" >View Candidate</option>
                        <option value="castVote" >Cast vote</option>
                        <option value="result" >View Result</option>
                    </select>
                        </a>
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
            
        <Carouselcomponent></Carouselcomponent>
        
            </div>
            
            <aside class="col-4  rounded  pr-0  aside-custom d-flex justify-content-center"><div class=" border border-dark text-light bg-lg-dark pb-5 quick-link">
          <h3>Quick Links</h3>
          <ul class="nav flex-column mb-4">
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">FAQs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">Apply for Voter ID</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">Check Voter ID status</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">About Us</a>
            </li>
          </ul>
          <h3><marquee direction="up" height="210" width="200" >Scrolling News</marquee>
          </h3>
          </div></aside>
            

            </div>
        </section>          
       

    </main>

    <Footer/>
    </div>)
}
export default VoterServices;