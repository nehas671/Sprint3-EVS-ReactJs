import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import Slogan from "./slogan";
import Aside from "./aside";
import Footer from './footer';
import { Button } from 'react-bootstrap';
import OfficerHeader from '../components/officerHeader';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

let userIdRef;
let userNameRef;
let userConstituencyRef;
let userDistrictRef;
let userDobRef;
let userMobileRef;
let dispatch;


const ApproveRequest = (props)=>{
    
    userIdRef = useRef(null);
    userNameRef = useRef(null);
    userConstituencyRef = useRef(null);
    userDistrictRef = useRef(null);
    userDobRef = useRef(null);
    userMobileRef = useRef(null);
    dispatch = useDispatch();

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
                ID: {getSpaces(14)}<input type="text" readOnly= {true} ref={userIdRef} value={props.voterRequest.id}   /><br/><br/>
                Name: {getSpaces(8)}<input type="text" ref={userNameRef} defaultValue={props.voterRequest.name} /><br/><br/>
        
        
        
        
    
        <div class="form-group row ">
                <label for="contactNumber" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
                <div class="col-8">
            <input type="text"  class="form-control" id="contactNumber" ref={userMobileRef}  required></input>
       </div>
        </div>
    
        <div class="form-group row ">
                <label for="emailId" class="col-4 col-form-label font-weight-bold">Email Id :</label>
                <div class="col-8">
            <input type="text"  class="form-control" id="emailId" ref={userMobileRef}  required></input>
            
        </div>
        </div>
    
        <div class="form-group row ">
                <label for="constituency" class="col-4 col-form-label font-weight-bold">Constituency :</label>
                <div class="col-8">
            <input type="text"  class="form-control" id="constituency" ref={userMobileRef}  required></input>
           
        </div>
        </div>
    
        <div class="form-group row">
        <label for="dob" class="col-4 col-form-label mr-3 font-weight-bold">Date Of Birth :</label>
        <input type="date" id="dob" name="dob" class="col-4 " ref={userMobileRef}  required></input>
        
          </div>
    
    
        <div class=" form-group row">
            <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">District :</label>
            <select class="form-control col-7 state" id="exampleFormControlSelect1" ref={userMobileRef}  required>
               
               
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
function getSpaces(no) {
        var spaces = '';
        for(var i=0;i<no;i++) {
            spaces += '\u00A0';
        }
        return spaces;
    }
function aproveVoterRequest(props) {
    console.log('Update product: ', props.voterRequest);
    props.voterRequest.id = userIdRef.current.value;
    props.voterRequest.name = userNameRef.current.value;
    props.voterRequest.applicationStatus = "Approved"
    dispatch(ApproveRequest(props.voterRequest)).then((response) => {
        props.AddVoterRequest();
    })
}
function rejectVoterRequest(props) {
    console.log('Update product: ', props.voterRequest);
    props.voterRequest.id = userIdRef.current.value;
    props.voterRequest.name = userNameRef.current.value;
    props.voterRequest.applicationStatus = "Rejected"
    dispatch(ApproveRequest(props.voterRequest)).then((response) => {
        props.AddVoterRequest();
    })
}

export default ApproveRequest