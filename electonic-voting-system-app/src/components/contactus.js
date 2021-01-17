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

const Contactus = (props) => {
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


        <div class="container contact-form">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>

     <div class="form-group row pt-4 pb-3">
    <label for="Name" class="col-4 col-form-label font-weight-bold"> Name :</label>
    <div class="col-8">
      <input type="text" class="form-control" id="Name" name="name" placeholder="Enter Name"></input>
    </div>
  </div>
 
  <div class="form-group row pt-4 pb-3">
    <label for="email" class="col-4 col-form-label font-weight-bold"> Email :</label>
    <div class="col-8">
      <input type="Email" class="form-control" id="email" name="name" placeholder="Enter Email"></input>
    </div>
  </div>
 

  <div class="form-group row pt-4 pb-3">
    <label for="Mobile No" class="col-4 col-form-label font-weight-bold"> Mobile No:</label>
    <div class="col-8">
      <input type="text" class="form-control" id="Name" name="name" placeholder="Enter Mobile Number"></input>
    </div>
  </div>
 


  <div class="form-group row pt-4 pb-3">
  <label for="Message" class="col-4 col-form-label font-weight-bold"> Message</label>
    <div class="col-8">
  <textarea class="form-control" id="message" rows="3"></textarea>
</div>
</div>


<br></br>
<button type="button" class="btn btn-primary">Submit</button>


               
            </form>
</div>
                    
            </div>
            
            <Aside/>
            

            </div>
        </section>          
       

    </main>

    <Footer/>



</div>
)
     
}
export default Contactus;