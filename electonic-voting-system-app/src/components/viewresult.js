export const ViewResult= (props) => {
    
    return (<div>


<h2 class="head mu-4 mb-4">View Result</h2>
<div class="col-8 border border-dark p-5 ml-auto mr-auto">
    
       <form>
  <div class=" form-group row">
    <label for="viewby" class="col-4 mr-3 font-weight-bold">View Result:</label>
    <select class="form-control col-7 state" id="viewby">
      <option>Election Name</option>
      <option>State Name</option>
      <option>Party Name</option>
    </select>
  </div>

  <div class="form-group row ">
    <label for="viewbyfilter" class="col-4 col-form-label font-weight-bold">Enter Value</label>
    <div class="col-8">
      <input type="text"  class="form-control" id="viewbyfilter" ></input>
    </div>
  </div>

  <div class="btn btn-primary mr-4 mb-4">Search</div>

  <div class='table  border border-dark col-12'>
      <table class="table table-hover col-12" >
        <thead>
            <tr>
                <th>ResultId</th>
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
        <td>101</td>
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
        <td></td>
    </tr>

</tbody>
</table>
</div>
  



</form>
</div>
</div>
    );
}
export default ViewResult;