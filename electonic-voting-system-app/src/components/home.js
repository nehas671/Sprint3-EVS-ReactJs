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
                        <a class="nav-link text-dark px-md-0 border-primary  nav-custom-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0  border-primary  nav-custom-link " href="#">Login</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="#">FAQ</a>
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
        <div class="jumbotron sky-color jumbotron-custom mb-0 px-sm-0 rounded-0">

            <div class="row  Custom-container px-sm-0 mb-5 text-break ">
                <div class="col-lg-9 col-sm-12 px-sm-0 text-center text-lg-left mb-4 mb-lg-0">
                    <div class="jumbotron-learnmore-heading mb-3 px-sm-0 ">Voting is not only your right but also your responsibility, cast your vote make your voice heard.</div>
                    <p class=" jumbotron-learnmore-subheading px-sm-0">E-voting where the voter submits his or her vote electronically to the election authorities, from any location</p>
                </div>
                <div class="col-lg-3  col-sm-12  ml-auto d-flex  justify-content-center mb-n4 ">
                    <button class="learn-more-button btn remove-box-shadow text-white align-self-center "><span class="pr-1">Use Your Vote</span><FontAwesomeIcon icon={icons.faVoteYea} /></button>
                </div>

            </div>

        </div>
        <section class="Custom-container technology-container">
            <div class="row mx-0 px-sm-0 mb-4  ">
            <main class="col-8  pl-0 pr-5">

            <Carousel>  
                         <Carousel.Item style={{'height':"500px"}} >  
                         <img style={{'height':"500px"}}  
                         className="d-block w-100"  
                        src={'carousel-img-1.jpg'}  />  
                           <Carousel.Caption>  
                            
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"500px"}}>  
                                 <img style={{'height':"500px"}}  
                                   className="d-block w-100"  
                                    src={'carousel-img-2.jpg'}    />  
                                       <Carousel.Caption>  
                                   
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"500px"}}>  
                                       <img style={{'height':"500px"}}  
                                        className="d-block w-100"  
                                         src={'carousel-img-3.jpg'}   />  
                                        <Carousel.Caption>  
                                         
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  

            </main>
            <aside class="col-4  rounded  pr-0  aside-custom d-flex justify-content-center"><div class=" border border-dark text-light bg-lg-dark pb-5 quick-link">
          <h3>Quick Links</h3>
          <ul class="nav flex-column mb-4">
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">Login</a>
            </li>
          </ul>
          <h3><marquee direction="up" height="210" width="200" >Scrolling News</marquee>
          </h3>
          </div></aside>
            </div>
        </section>
    </main>
    <footer>
        <div class=" footer-before">
            <div class="row Custom-container  word-break">
                <div class="col-lg-6 col-md-6 light-grey mb-3 mb-md-0 px-sm-0 pr-md-4 ">
                    <div class="footer-headings">About Us</div>
                    <p>E-voting which is physically supervised by representatives of governmental or independent electoral authorities.
remote e-voting via the Internet (also called i-voting) where the voter submits his or her vote electronically to the election authorities, from any location.</p>
                </div>
                <div class="col-lg-6 col-md-6  text-lg-right light-grey  mb-3 mb-md-0 px-sm-0 px-md-2">
                    <div class="footer-headings mb-1">Follow Us</div>
                    <div class="d-flex flex-wrap justify-content-lg-end"><img src="followus.png" class="col-2" alt="followus"/>
                                            </div>
                </div>
            </div>

        </div>
        <div class="footer-after">
            <div class="row Custom-container d-flex justify-content-center py-4 ">
                
                <div class="text-muted small align-center">&copy; Copyright 2021.All Rights Reserved</div> 
            </div>
        </div>
    </footer>

</div>
)            
}
export default Home;