import { Container } from "react-bootstrap";

const AddElection= (props) => {
    
    return (<div>
        <div class="col-6 border border-dark p-5 ml-auto mr-auto">
       <form>
  <div class="form-group row ">
    <label for="electionName" class="col-4 col-form-label font-weight-bold">Election Name :</label>
    <div class="col-8">
      <input type="text" class="form-control" id="electionName" placeholder="Enter Election Name"></input>
    </div>
  </div>
  <div class=" form-group row">
    <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">Select State :</label>
    <select class="form-control col-7 state" id="exampleFormControlSelect1">
      <option>Maharashtra</option>
      <option>Madhya Pradesh</option>
      <option>Goa</option>
      <option>Kerala</option>
      <option>Andhra Pradesh</option>
    </select>
  </div>
  <div class="form-group row">
  <label for="constituency" class="col-4 col-form-label font-weight-bold">Constituency :</label>
    <div class="col-8">
      <input type="text"  class="form-control" id="constituency" placeholder="Enter Constituency" ></input>
    </div>
  </div>
  <div class="form-group row">
  <label for="date" class="col-4 col-form-label mr-3 font-weight-bold">Election Date :</label>
  <input type="date" id="date" name="date" class="col-4 "></input>
   
      </div>
      <div class="btn btn-primary">ADD</div>
  
</form>
</div>
    </div>)
}


export default AddElection;


