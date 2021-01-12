export const AddResult= (props) => {
    
    return (<div>

<h2 class="head mu-4 mb-4">Declare Result</h2>

        <div class="col-7 border border-dark p-5 ml-auto mr-auto">
       <form>
  <div class="form-group row ">
    <label for="electionName" class="col-4 col-form-label font-weight-bold">Election Name :</label>
    <div class="col-8">
      <input type="text"  class="form-control" id="electionName" ></input>
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
 
      <div class="btn btn-primary mr-4 mb-4">CountVote</div>

      <div class="btn btn-primary mb-4">Add Result</div>
  

        <div class='table  border border-dark col-12'>
      <table class="table table-hover col-12" >
        <thead>
            <tr>
<th>Election Name</th>
<th>State</th> 
<th>Date</th>
<th>Candidate Name</th>
<th>Party Name</th>
<th>Constituency</th>
<th> Votes</th>
  </tr>
</thead>

<tbody>
    <tr>
<td>Lok sabha</td>
<td>Maharashtra</td>
<td>23-12-2020</td>
<td>Priya Shetpal</td>
<td> Bhartiya Janta Party</td>
<td>Mumbai</td>
<td> 1400</td>
</tr>
<tr>
   
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>

</tbody>
</table>
</div>
  

</form>
</div>
    </div>)
}