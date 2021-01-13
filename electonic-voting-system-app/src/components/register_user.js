import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';



let dispatch;
const RegisterUser = (props) => {
   
    dispatch = useDispatch();
   

    const RegisterUser = ()=>{
        
    }
    return (
    <div>
    <div>
    
    <main>
        <div class="jumbotron sky-color jumbotron-custom mb-0 px-sm-0 rounded-0">
        <div class="col-6 border border-dark p-5 ml-auto mr-auto">
        <h2>Register User</h2>
        <br></br>
        <form>
        <div class="form-group row ">
            <label for="Name" class="col-4 col-form-label font-weight-bold">Name :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="Name" required></input>
    </div>
    </div>
    

    

    <div class="form-group row ">
            <label for="contactNumber" class="col-4 col-form-label font-weight-bold">Mobile Number :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="contactNumber" required></input>
    </div>
    </div>

    <div class="form-group row ">
            <label for="emailId" class="col-4 col-form-label font-weight-bold">Email Id :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="emailId" required></input>
    </div>
    </div>

    <div class="form-group row ">
            <label for="Constituency" class="col-4 col-form-label font-weight-bold">Address :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="Constituency" required></input>
    </div>
    </div>

    <div class="form-group row">
  <label for="dob" class="col-4 col-form-label mr-3 font-weight-bold">Date Of Birth :</label>
  <input type="date" id="dob" name="dob" class="col-4 " required></input>
   
      </div>


    <div class=" form-group row">
        <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">District :</label>
        <select class="form-control col-7 state" id="exampleFormControlSelect1" required>
            <option>Washim</option>
            <option>Akola</option>
            <option>Balapur</option>
    </select>
    </div>
    
    <Button variant="primary" name="add" value="Register User" onClick={RegisterUser}>RegisterUser</Button>
  
</form>
        </div>
        
</div>
</main>
            
</div>


</div>
)
let validName=false;
};

export default RegisterUser;

