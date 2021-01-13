import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

const AddRequest = (props) => {
    
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

    <div>
    
    <main>
        <div class="jumbotron sky-color jumbotron-custom mb-0 px-sm-0 rounded-0">
        <div class="col-6 border border-dark p-5 ml-auto mr-auto">
        <h2>Add Voter Request</h2>
        <br></br>
        <form>
            <div class="form-group row ">
            <label for="Name" class="col-4 col-form-label font-weight-bold">Name :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="Name" ></input>
    </div>
    </div>
    

    <div class="form-group row ">
            <label for="contact_number" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="contact_number" ></input>
    </div>
    </div>

    <div class="form-group row ">
            <label for="email" class="col-4 col-form-label font-weight-bold">Email Id :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="email" ></input>
    </div>
    </div>

    <div class="form-group row ">
            <label for="Constituency" class="col-4 col-form-label font-weight-bold">Constituency :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="Constituency" ></input>
    </div>
    </div>

    <div class="form-group row ">
            <label for="Gender" class="col-4 mr-3 font-weight-bold">Gender :</label>
            <select class="form-control col-7 state" id="Gender">
            <option>Male</option>
            <option>Female </option>
            <option>Other</option>
    </select>
    </div>


    <div class=" form-group row">
        <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">District :</label>
        <select class="form-control col-7 state" id="exampleFormControlSelect1">
            <option>Surguja</option>
            <option>Surajpur</option>
            <option>Balrampur</option>
    </select>
    </div>
    
    <div class="btn btn-primary">ADD</div>
  
</form>
        </div>
        
</div>
</main>
            
</div>

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
                    <div class="d-flex flex-wrap justify-content-lg-end"><i class=" ml-0 fab fa-twitter footer-icons btn rounded-0 text-white "></i>
                        <i class="fab fa-google-plus-g  footer-icons-google btn rounded-0 footer-icons text-white"></i><i class="fab fa-youtube btn rounded-0 footer-icons text-white "></i>
                        <i class="fab fa-skype btn footer-icons-skype rounded-0 footer-icons text-white "></i>
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
};

export default AddRequest;

