import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

const AddVoterRequest = (props)=>{
    return(
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
            <h2>Add Voter Request</h2>
            <br></br>
            <br></br>
            <div class="container">
            <form class="form-horizontal" action="" style={{width:'500px'}}>
                <div class="form-group">     
                
                <label class="control-label col-sm-2" for='Name'>Name :</label>
                <div class="col-sm-10">
                <input type="text" name="Name" id="name" className="form-control" placeholder="Enter Your Name"></input>
                </div>
                </div>

                <div class="form-group">
                <label class="control-label col-sm-2" for="Gender" >Gender:</label>
                <div class="col-sm-10">
                <select name="Gender" id="gender" className="form-control" placeholder="Gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>
                </div>
                
                
                <div class="form-group">
                <div class="col-25">
                <label class="control-label col-sm-6" for="Contact Number">Contact Number :</label>
                </div>
                <div class="col-sm-10">
                <input type="text" name="Contact Number" className="form-control" placeholder="Your Number"></input>
                </div>
                </div>

                <div class="form-group">
                <div class="col-25">
                <label class="control-label col-sm-6" for="Email Id">Email Id:</label>
                </div>
                <div class="col-sm-10">
                <input type="text" name="Email Id" className="form-control" placeholder="Your Email Id"></input>
                </div>
                </div>

                <div class="form-group">
                <div class="col-25">
                <label class="control-label col-sm-2" for="Constituency">Constituency:</label>
                </div>
                <div class="col-sm-10">
                <input type="text" name="Constituency" className="form-control" placeholder="Enter Constituency"></input>
                </div>
                </div>

                <div class="form-group">
                <div class="col-25">
                <label class="control-label col-sm-2" for="State" >State:</label>
                </div>
                <div class="col-sm-10">
                <select name="State" id="state" className="form-control">
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Bihar">Bihar</option>
                </select>
                </div>
                </div>
                <br></br>
                <div class="form-group">        
                    <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">Submit</button>
                    </div>
                    </div>
                            
            </form>
            </div>
            </div>
        </div>
    )
}

export default AddVoterRequest;