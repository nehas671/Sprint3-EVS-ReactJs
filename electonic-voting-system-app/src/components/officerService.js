
import Carouselcomponent from '../components/Carousel'

import Footer from './footer';
import Slogan from './slogan';
import OfficerHeader from './officerHeader';
import OfficerAside from './officerAside';





const OfficerService = (props) =>
{
  return(
  <div>

    <OfficerHeader/>
    <main>
      <Slogan/>
      <section class="Custom-container technology-container">
        <div class="row mx-0 px-sm-0 mb-4  ">
          <div class="col-8  pl-0 pr-5">
            <Carouselcomponent></Carouselcomponent>
          </div>
          <OfficerAside/>
        </div>
      </section>
    </main>
    <Footer/>
  </div>)
} 

export default OfficerService;