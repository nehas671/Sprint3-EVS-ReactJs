import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import Slogan from "./slogan";
import Aside from "./aside";
import Footer from './footer';
import { Button } from 'react-bootstrap';
import OfficerHeader from '../components/officerHeader'

let userIdRef;
let userNameRef;
let userConstituencyRef;
let userDistrictRef;
let userDobRef;
let userMobileRef;

let dispatch;
const ApproveRequest = (props)=>{
    
        const addVoterRequest = ()=>{
            
        }
        return (
        <div>
        
        <OfficerHeader></OfficerHeader>
    
    
        <main>
            <Slogan/>
    
            <section class="Custom-container technology-container">
                <div class="row mx-0 px-sm-0 mb-4">
    
            <div class="col-8  pl-0 pr-5">
            <div class="col border border-dark bg-light p-5 ml-auto mr-auto">
            <h2> Voter Request</h2>
            <br></br>
    
            <form onSubmit="">
                <div class="form-group row ">
                <label  class="col-4 col-form-label font-weight-bold">Name :</label>
                <div class="col-8">
            <input type="text"  class="form-control" ref={userNameRef} defaultValue={props.voterRequest.name} required></input>
        
        </div>
        </div>
        
    
        <div class="form-group row ">
                <label for="contactNumber" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
                <div class="col-8">
            <input type="text"  class="form-control" id="contactNumber" ref={userMobileRef} defaultValue={props.voterRequest.contactNumber} required></input>
       </div>
        </div>
    
        <div class="form-group row ">
                <label for="emailId" class="col-4 col-form-label font-weight-bold">Email Id :</label>
                <div class="col-8">
            <input type="text"  class="form-control" id="emailId" ref={userMobileRef} defaultValue={props.voterRequest.contactNumber} required></input>
            
        </div>
        </div>
    
        <div class="form-group row ">
                <label for="constituency" class="col-4 col-form-label font-weight-bold">Constituency :</label>
                <div class="col-8">
            <input type="text"  class="form-control" id="constituency" ref={userMobileRef} defaultValue={props.voterRequest.contactNumber} required></input>
           
        </div>
        </div>
    
        <div class="form-group row">
        <label for="dob" class="col-4 col-form-label mr-3 font-weight-bold">Date Of Birth :</label>
        <input type="date" id="dob" name="dob" class="col-4 " ref={userMobileRef} defaultValue={props.voterRequest.contactNumber} required></input>
        
          </div>
    
    
        <div class=" form-group row">
            <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">District :</label>
            <select class="form-control col-7 state" id="exampleFormControlSelect1" ref={userMobileRef} defaultValue={props.voterRequest.contactNumber} required>
               
               
        </select>
        </div>
        
        <Button variant="primary" name="add" value="APPROVE VOTER REQUEST" onClick={aproveVoterRequest}>APPROVE VOTER REQUEST</Button>
        {'\u00A0'}{'\u00A0'}{'\u00A0'}
        <Button variant="primary" name="add" value="REJECT VOTER REQUEST" onClick={rejectVoterRequest}>REJECT VOTER REQUEST</Button>
    </form>
            </div>
            
    </div>
            
            </div>
            </section>
    </main>
                
        <Footer/>
    
    
    </div>
    )
    };

function aproveVoterRequest(params) {
    
}
function rejectVoterRequest(params) {
    
}

export default ApproveRequest