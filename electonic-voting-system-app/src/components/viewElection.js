const ShowElections = (props) => {

    return (<div>
<div class="container col-6 pt-5">
<form>
  <div class="form-group row ">
    <div class="col-4">
      <input type="text" class="form-control" id="electionName" placeholder="Enter Value"></input>
    </div>

    <div class=" form-group row">
    <label for="exampleFormControlSelect1" class=" col-4 mr-3 font-weight-bold">Select Option:</label>
    <select class="form-control col-5 " id="exampleFormControlSelect1">
      <option>State</option>
      <option>Election Name</option>
      <option>Constituency</option>
      <option>Date</option>
    </select>
  </div>
  <div class="col-2">
  <div class="btn btn-outline-primary  ">Search</div>
  </div>
  
  </div>
  
  </form>
    <center>
    <h2 class="font-weight-bold">Election List</h2>
    
    <table class="table table-border table-striped">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>State</th>
            <th>Constituency</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
    <tr>
            <td>1</td>
            <td>Loksabha</td>
            <td>Maharashtra</td>
            <td>Pune</td>
            <td>2021-02-21</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Loksabha</td>
            <td>Madhya Pradesh</td>
            <td>Jabalpur</td>
            <td>2021-04-12</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Loksabha</td>
            <td>Goa</td>
            <td>Panji</td>
            <td>2021-03-02</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Loksabha</td>
            <td>Maharashtra</td>
            <td>Mumbai</td>
            <td>2021-02-10</td>
        </tr>
    </tbody>
    </table>
    
    </center>
    </div>
</div>);
};


export  default ShowElections;
