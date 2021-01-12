const AddCandidate= (props) => {
    
    return (
    <div>
        <div class="col-6 border border-dark p-5 ml-auto mr-auto">
        <form>
            <div class="form-group row ">
            <label for="candidateName" class="col-4 col-form-label font-weight-bold">Candidate Name :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="candidateName" ></input>
    </div>
    </div>

    <div class="form-group row ">
            <label for="address" class="col-4 col-form-label font-weight-bold">Address :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="address" ></input>
    </div>
    </div>

    <div class="form-group row ">
            <label for="age" class="col-4 col-form-label font-weight-bold">Age :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="age" ></input>
    </div>
    </div>
    

    <div class="form-group row ">
            <label for="contact_number" class="col-4 col-form-label font-weight-bold">Contact Number :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="contact_number" ></input>
    </div>
    </div>

    <div class="form-group row ">
            <label for="email" class="col-4 col-form-label font-weight-bold">Email :</label>
            <div class="col-8">
        <input type="text"  class="form-control" id="email" ></input>
    </div>
    </div>


    <div class=" form-group row">
        <label for="exampleFormControlSelect1" class="col-4 mr-3 font-weight-bold">Party Name :</label>
        <select class="form-control col-7 state" id="exampleFormControlSelect1">
            <option>BJP</option>
            <option>Congress</option>
            <option>AAP</option>
    </select>
    </div>
    
    <div class="btn btn-primary">ADD</div>
  
</form>
</div>
</div>
)
};

export default AddCandidate;

