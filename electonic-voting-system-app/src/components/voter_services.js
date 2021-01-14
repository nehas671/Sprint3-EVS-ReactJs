import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import Carouselcomponent from '../components/Carousel'
//import Header from './header';
//import Aside from './aside';
import Footer from './footer';
import Slogan from './slogan';
import VoterHeader from './voterHeader';
import VoterAsideComponent from './voterAside';

//import Carousel from 'react-bootstrap/Carousel'
const VoterServices = (props) =>
{
    return(
    <div>
        <VoterHeader />
        <main>
            <Slogan/>
            <section class="Custom-container technology-container">
                <div class="row mx-0 px-sm-0 mb-4  ">
                    <div class="col-8  pl-0 pr-5">
                        <Carouselcomponent></Carouselcomponent>
                    </div>
                    <aside class="col-4  rounded  pr-0  aside-custom d-flex justify-content-center">
                        <VoterAsideComponent/>
                    </aside>
                </div>
            </section>
        </main>
        <Footer/>
    </div>)
}

export default VoterServices;