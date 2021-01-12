import { Container } from "react-bootstrap";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import showStatesAction from '../actions/get_states';
import addElectionAction from '../actions/add_election';
import { useHistory } from "react-router-dom";
import Election from '../models/election';
import States from '../models/state';



let dispatch;
let history;
let selectedState;
const AddElection= (props) => {


  dispatch = useDispatch();
  history = useHistory();
  let statlist = useSelector(state => state);

  React.useEffect(() => {
      StatesList()
    }, []);
  
    const StatesList = () => {
      dispatch(showStatesAction())
    }
  console.log("StatesList: ", statlist);

    
    return (
      <div>
        <div class="col-6 border border-dark p-5 ml-auto mr-auto">
<form onSubmit={handleSubmit}>
  <div class="form-group row ">
    <label for="electionName" class="col-4 col-form-label font-weight-bold">Election Name :</label>
    <div class="col-8">
      <input type="text" class="form-control" id="electionName" name="name" placeholder="Enter Election Name"></input>
    </div>
  </div>
  <div class=" form-group row">
    <label for="state" class="col-4 mr-3 font-weight-bold">Select State :</label>
    <select class="form-control col-7 state" id="state"  onChange={handleChange}>
    {renderStates(statlist)}
    </select>
  </div>
  <div class="form-group row">
  <label for="constituency" class="col-4 col-form-label font-weight-bold">Constituency :</label>
    <div class="col-8">
      <input type="text"  class="form-control" id="constituency" name="constituency" placeholder="Enter Constituency" ></input>
    </div>
  </div>
  <div class="form-group row">
  <label for="date" class="col-4 col-form-label mr-3 font-weight-bold">Election Date :</label>
  <input type="date" id="date" name="date" class="col-4 "></input>
   
      </div>
      <button>ADD</button>
</form>
</div>
</div>
)
}



function handleChange(event) {
  selectedState = event.target.value
  console.log("selected state: ", selectedState);
}
function renderStates(statlist) {
  console.log("StatesList: ", statlist);
  return statlist.map((state, index) => {
      console.log("state:",state);
     return (
      <option key={state.state} value={state.state}>{state.state}</option>
     )
  })
};

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log("in handle submit:",data)
  const name = data.get('name');
  const constituency = data.get('constituency');
  const date = data.get('date');
  console.log(date);
  if(name==='' || name===null) {
      alert("Name cannot be blank");
      return;
  }
  
  const empObj = new Election(name, selectedState, constituency,date);
  console.log("electionObj:",empObj);
  dispatch(addElectionAction(empObj));
  history.push('/');
  


}
export default AddElection;


