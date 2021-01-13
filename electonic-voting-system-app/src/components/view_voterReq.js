import React from 'react';

import { Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ViewVoterReqAction from '../actions/view_voterReq'


var selected=document.getElementById("viewBy"); 
const ViewVoterReq =(props)=>{

    let voterList=useSelector(state=>state);
    const dispatch =useDispatch();
    React.useEffect(()=>{
        VoterList()
    },[]);
    const VoterList=()=>{
        dispatch(ViewVoterReqAction())
    }
    console.log("List:",voterList);
    if(!Array.isArray(voterList)){
        voterList=[];
        console.log("set to null array");
    }
    return(
        
        <div >
            <center>
                <br></br>
                <h2>Voter Request List</h2>
                <br/>
                <label for="viewBy">View By:&nbsp;&nbsp;</label>

<select  id="viewBy" onClick={getValue}>
    <option value='' selected disabled hidden>--Select--</option>
    <option value='district'>district</option>
    <option value='status'>status</option>
</select> &nbsp;&nbsp;&nbsp;
<label for="option">Choose an Option:&nbsp;&nbsp; </label>

<select   id="option" >
<option value='' selected disabled hidden>--Select--</option>
{handleDrop(voterList)}</select>&nbsp;&nbsp;&nbsp;

        <button type="submit" class="btn btn-primary">Search</button>
                <br></br>
                <br></br>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>Name</th>
                            <th>date of birth</th>
                            <th>District</th>
                            <th>VoterId</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData(voterList) }
                    </tbody>
                </table>
            </center>


        </div>
    );

};
function renderTableData(voterList){
    console.log("list:",voterList);
    return voterList.map((voter,index)=>{
        const{user_id,name,dob,district,voterId,status}=voter;
        return(
            <tr key={user_id}>
                <td>{user_id}</td>
                <td>{name}</td>
                <td>{dob}</td>
                <td>{district}</td>
                <td>{voterId}</td>
                <td>{status}</td>
                <td><Button as="input" type="button" value="approve/reject"></Button> &nbsp;
        
            </td>
            </tr>
        )
    })
    
};

const getValue= e=>{
    selected=e.target.value;
    console.log(selected);
}
function handleDrop(voterList){
    if(selected=='district'){

        console.log("list:",voterList);
        return voterList.map((voter,index)=>{
            const{user_id,district}=voter;
            console.log(district);
            return(
                <option key={user_id} value={user_id}>{district}</option>
               
            )
        })
    }
    else if(selected==='status'){
        console.log("list:",voterList);
        return voterList.map((voter,index)=>{
            const{user_id,district}=voter;
            console.log(district);
            return(
                <option key={user_id} value={user_id}>{district}</option>
               
            )
        })

    }

    };
export default ViewVoterReq;