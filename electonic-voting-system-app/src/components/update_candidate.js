const UpdateCandidate = (props) => {
    
    return (
      <div>
          <h1>Edit Candidate Details</h1>
            <div class="col-6 border border-dark p-5 ml-auto mr-auto">
              <form>
                <div class="form-group row ">
                  <label for="candidateName" class="col-4 col-form-label font-weight-bold">Candidate Name :</label>
                  <div class="col-8">
                <input type="text"  class="form-control" id="candidateName" placeholder ="Enter Name"></input>
            </div>
        </div>

          <div class="form-group row ">
              <label for="address" class="col-4 col-form-label font-weight-bold">Address :</label>
              <div class="col-8">
          <input type="text"  class="form-control" id="address"  placeholder ="Enter Address"></input>
          </div>
        </div>

        <div class="form-group row ">
            <label for="age" class="col-4 col-form-label font-weight-bold">Age :</label>
            <div class="col-8">
          <input type="text"  class="form-control" id="age" placeholder="Enter Age"></input>
          </div>
      </div>
    

        <div class="form-group row ">
            <label for="contact_number" class="col-4 col-form-label font-weight-bold">Contact Number :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="contact_number" placeholder ="Enter Contact Number"></input>
      </div>
      </div>

      <div class="form-group row ">
            <label for="email" class="col-4 col-form-label font-weight-bold">Email Id:</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="email" placeholder ="Enter email"></input>
      </div>
      </div>


      <div class=" form-group row">
        <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">Party Name :</label>
        <select class="form-control col-7 state" id="exampleFormControlSelect1" placeholder="Select">
            <option>BJP</option>
            <option>Congress</option>
        </select>
     </div>
    
    <div class="btn btn-primary">Edit</div>
  
</form>
</div>
</div>
      );
}

export default UpdateCandidate;