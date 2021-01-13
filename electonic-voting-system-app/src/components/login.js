import { useHistory } from "react-router-dom";
import Header from "./header";
import Aside from './aside';
import Footer from './footer';
import Slogan from './slogan';


let history;
const Services = (props) => {
    history = useHistory();
    return(
        <div>
<Header/>

<main>

    <Slogan/>

    <section class="Custom-container technology-container">
        <div class="row mx-0 px-sm-0 mb-4  ">
                          
        <div class="col-8  pl-0 pr-5">

            <button onClick={loginAdmin}>Admin</button>
            <button onClick={loginOfficer}>Officer</button>
            <button onClick={loginVoter}>username</button>
        
        </div>
        
        <Aside/>
        

        </div>
    </section>          
   

</main>

<Footer/>     
            
        </div>
    )
}

function loginAdmin(){
    history.push('/admin_services');
}

function loginOfficer(){
    history.push('/Officer_services');
}


function loginVoter(){
    history.push('/VoterServices');
}

export default Services;