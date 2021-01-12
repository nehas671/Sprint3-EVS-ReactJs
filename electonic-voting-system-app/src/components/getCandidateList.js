import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import getCandidateListAction from '../actions/getCandidateAction';



const GetCandidateList = (props) => {
    //history = useHistory();
    let candidateList = useSelector(state => state);

    const dispatch = useDispatch();

    React.useEffect(() => {
        CandidateList()
      }, []);
    
      const CandidateList = () => {
        dispatch(getCandidateListAction({electionName: 'Lok Sabha',state: 'Maharasthra', constituency:'Mumbai', date:'2020-12-13'}))
      }
    console.log("Candidate List: ", candidateList);

    return (
        <div>
    <center>
    <h2>Candidate List</h2>
    <table border="2">
    <thead>
        <tr>
            <th>Candidate Name</th>
            <th>Party Name</th>
        </tr>
    </thead>
    <tbody>
        {renderTableData(candidateList)}
    </tbody>
    </table>
    </center>
</div>
    );
}

function renderTableData(candidateList) {
    
    return candidateList.map((candidate, index) => {
       const { candidateName, partyName } = candidate//destructuring
       return (
          <tr key={index}>
             <td>{candidateName}</td>
             <td>{partyName}</td>
          </tr>
       )
    })
 };

export default GetCandidateList;