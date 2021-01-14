import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

let dispatch;
let history;
const ApproveRequest = (props)=>{

       
        dispatch = useDispatch();
        history = useHistory();
        
       
        React.useEffect(() => {
            DistrictsList() }, []);
        
          const DistrictsList = () => {
            dispatch(showDistrictsAction())
          }
    
        console.log("DistrictList: ", districtList);
    
        const addVoterRequest = ()=>{
            
        }
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
                            <a class="nav-link text-dark px-md-0  border-primary  nav-custom-link " href="#">Voter Request</a>
                        </li>
                        <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                            <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="#">View Voter Request</a>
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
                <div class="row mx-0 px-sm-0 mb-4">
    
            <div class="col-8  pl-0 pr-5">
            <div class="col border border-dark bg-light p-5 ml-auto mr-auto">
            <h2>Add Voter Request</h2>
            <br></br>
    
            <form onSubmit={handleSubmitt}>
                <div class="form-group row ">
                <label for="Name" class="col-4 col-form-label font-weight-bold">Name :</label>
                <div class="col-8">
            <input type="text"  class="form-control" id="Name" onBlur={validateUserName} required></input>
            <small id="namevalid" class="form-text text-danger invalid-feedback">
                Name should only contain characters
           </small>
        </div>
        </div>
        
    
        <div class="form-group row ">
                <label for="contactNumber" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
                <div class="col-8">
            <input type="text"  class="form-control" id="contactNumber" onBlur={validateMobileNumber} required></input>
            <small id="numbervalid" class="form-text text-danger invalid-feedback">
                Number should only contain 10 digits
           </small>
       </div>
        </div>
    
        <div class="form-group row ">
                <label for="emailId" class="col-4 col-form-label font-weight-bold">Email Id :</label>
                <div class="col-8">
            <input type="text"  class="form-control" id="emailId" onBlur={validateEmailId} required></input>
            <small id="numbervalid" class="form-text text-danger invalid-feedback">
                Email Id should be in proper format
           </small>
        </div>
        </div>
    
        <div class="form-group row ">
                <label for="constituency" class="col-4 col-form-label font-weight-bold">Constituency :</label>
                <div class="col-8">
            <input type="text"  class="form-control" id="constituency" onBlur={validateConstiuency} required></input>
            <small id="namevalid" class="form-text text-danger invalid-feedback">
                Constituency should only contain characters
           </small>
        </div>
        </div>
    
        <div class="form-group row">
        <label for="dob" class="col-4 col-form-label mr-3 font-weight-bold">Date Of Birth :</label>
        <input type="date" id="dob" name="dob" class="col-4 " onBlur={validateDate} required></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
                    Date of Birth should be less than the current Date
            </small>
          </div>
    
    
        <div class=" form-group row">
            <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">District :</label>
            <select class="form-control col-7 state" id="exampleFormControlSelect1" onChange={handleChange} required>
               {renderDistrict(districtList)} 
               
        </select>
        </div>
        
        <Button variant="primary" name="add" value="ADD VOTER REQUEST" onClick={addVoterRequest}>ADD VOTER REQUEST</Button>
      
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
    };

export default ApproveRequest