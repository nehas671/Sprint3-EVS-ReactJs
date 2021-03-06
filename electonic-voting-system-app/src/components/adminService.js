import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as regularicons from '@fortawesome/fontawesome-svg-core'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import AddElection from '../components/addElection'
import ShowElections from '../components/viewElection'
import Carousel from 'react-bootstrap/Carousel'
import Carouselcomponent from '../components/Carousel'
import Header from './header';
import AdminAsideComponent from './adminAside';
import Footer from './footer';
import Slogan from './slogan';
import AdminHeader from './adminheader';




const AdminService = (props) =>
{
  return(
  <div>

    <AdminHeader/>
    <main>
      <Slogan/>
      <section class="Custom-container technology-container">
        <div class="row mx-0 px-sm-0 mb-4  ">
          <div class="col-8  pl-0 pr-5">
            <Carouselcomponent></Carouselcomponent>
          </div>
          <AdminAsideComponent/>
        </div>
      </section>
    </main>
    <Footer/>
  </div>)
} 

export default AdminService;