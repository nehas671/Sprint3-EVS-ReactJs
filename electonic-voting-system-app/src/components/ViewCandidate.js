import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import viewCandidatesAction from '../actions/viewCandidate';


const ViewCandidates = (props) => {


    let candidateList = useSelector(state => state);

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
    return (<div>
    <center>
    <h2>Candidate List</h2>
    <table border="2">
    <thead>
        <tr>
            <th>ID</th>
            <th>Candidate_Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Phone_Number</th>
            <th>Email</th>
            <th>Party_Name</th>
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
          </tr>
       )
    })
 };

export default ViewCandidates
