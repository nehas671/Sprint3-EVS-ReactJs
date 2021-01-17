import { useHistory } from "react-router-dom";
import Header from "./header";
import Aside from './aside';
import Footer from './footer';
import Slogan from './slogan';


let history;
const Services = (props) => 
{
    history = useHistory();
    return(
    <div>
        <Header/>
        <main>
            <Slogan/>
            <section class="Custom-container technology-container">
                <div class="row mx-0 px-sm-0 mb-4  ">
                    <div class="col-8 bg-light border border-dark pl-0 p-5 ">
                        <div class="container text-center">
                            <h1 class="text-center service mb-5">
                                Services
                            </h1>
                            <button type="button" onClick={loginAdmin} class="btn btn-outline-primary col-6 ml-3 mb-4 mr-3 font-weight-bold">
                                Administrator/Electoral Officer Login
                            </button>
                            <button type="button" onClick={loginVoter} class="btn btn-outline-primary col-6 ml-3 mb-4 mr-3 font-weight-bold">
                                Voter Login
                            </button>
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

function loginAdmin()
{
    history.push('/evslogin');
}

function loginVoter()
{
    history.push('/loginuser');
}

export default Services;