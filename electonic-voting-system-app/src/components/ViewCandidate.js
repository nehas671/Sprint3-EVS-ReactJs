import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import viewCandidatesAction from '../actions/viewCandidate';


const ViewCandidates = (props) => {


    let candidateList = useSelector(state => state.candidateReducer);

    const dispatch = useDispatch();

    React.useEffect(() => {
        CandidateList()
      }, []);
    
      const CandidateList = () => {
        dispatch(viewCandidatesAction())
      }

    console.log("candidateList: ", candidateList);

    if(!Array.isArray(candidateList)) {
        candidateList = [];
        console.log("Set candidateList to blank array");
    }
    return (<div class="container col-6 pt-5">
    <center>
    <h2 class="font-weight-bold">Candidate List</h2>
    <table class="table table-border table-striped">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>PhoneNumber</th>
            <th>Email</th>
            <th>PartyName</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {renderTableData(candidateList)}
    </tbody>
    </table>
    </center>
</div>);
};

function renderTableData(candidateList) {
    console.log("candidateList inside render: ", candidateList);
    return candidateList.map((candidate, index) => {
        const partyName = candidate.party.partyName;
       const { candidateId, candidateName, address, age, contact_number, email } = candidate //destructuring
       return (
          <tr key={candidateId}>
             <td>{candidateId}</td>
             <td>{candidateName}</td>
             <td>{address}</td>
             <td>{age}</td>
             <td>{contact_number}</td>
             <td>{email}</td>
             <td>{partyName}</td>

             
             <td><div class="btn-group" role="group" aria-label="Basic mixed styles example">
             <button type="button" class="btn btn-outline-warning" disabled>Edit</button>
             <button type="button" class="btn btn-outline-danger" disabled>Delete</button>
             
             </div>
            </td>
          </tr>
       )
    })
 };

export default ViewCandidates;
