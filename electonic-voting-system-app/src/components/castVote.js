import React, {useDispatch} from 'react';
import { Form, FormGroup, Button, Card} from 'react-bootstrap';
import Election from '../models/election';
import GetCandidateList from '../components/getCandidateList';

//let dispatch;
const CastVote =(props)=>
{
    //dispatch = useDispatch();
    
    var today = new Date();
    
    var day = 13 //today.getDate();
    var month = 12 //today.getMonth()+1;
    var year = 2020 //today.getFullYear();

    if(day<10)
    {
        day = '0'+day;
    }
    if(month<10)
    {
        month='0'+month;
    }

    const date= year+'-'+month+'-'+day;

    return(
    <div align='left' className='m-4'>
        <Card className='mb-2' bg='light' border = 'primary' align='center'>
            <Card.Body><h1>Welcome Voter!</h1>
            <h3>One vote can change the future! Your vote is important!</h3>
            </Card.Body>
        </Card>
        <Card padding='3'>
            <Card.Body>
        <h4>Please fill the details as required to cast your vote</h4>
        <Form onSubmit={handleSubmit}>    
            <FormGroup>
                <label htmlFor='electionName'>Election Name: *&nbsp;</label>
                <select id="electionName" name='electionName' onChange={handleElectionNameChange} required>
                    <option></option>
                    <option>Lok Sabha</option>
                    <option>Vidhan Sabha</option>
                </select>
            </FormGroup>
            
            <FormGroup>
                <label htmlFor="state">Election State: *&nbsp;</label>
                <input id="state" name="state" type="text" placeholder="Eg. Maharashtra" onChange={handleStateChange} required/>
            </FormGroup>
            
            <FormGroup>
                <label htmlFor='constituency'>Constituency: *&nbsp;</label>
                <input id='constituency' name='constituency' type ='text' placeholder='Eg. Mumbai' onChange={handleConstituencyChange} required></input>
            </FormGroup>
            
            <FormGroup>
                <label htmlFor='date'>Election Date: &nbsp;</label>
                <input type='text' id='date' name='date' value={date} readOnly></input>
            </FormGroup>
            
            <Button variant='outline-success' onClick={handleSubmit}>Get Candidate List</Button>
        </Form>
        </Card.Body>
        </Card>
    </div>
    )
}

function handleElectionNameChange(event)
{
    var enteredElectionName=event.target.value;
    if(enteredElectionName ==="")
    {
        console.error("Please select election name from drop down!")
    }
    else
    {
        console.log({enteredElectionName});
    }
}

function handleStateChange(event)
{
    var enteredState=event.target.value;
    let pattern = /^[a-zA-z]([a-zA-Z&](\s*)?){2,}$/;
    if(enteredState.match(pattern))
    {
        console.log({enteredState});
    }
    else if(enteredState.length<3)
    {
        console.error('Length is less than 3!');
    }
    else if(Number(enteredState))
    {
        console.error('Cannot be numeric!');
    }
    else
    {
        console.error('State can only have characters!')
    }
}

function handleConstituencyChange(event)
{
    var enteredConstituency=event.target.value;
    let pattern = /^[a-zA-z]([a-zA-Z&](\s*)?){2,9}$/;
    if(enteredConstituency.match(pattern))
    {
        console.log({enteredConstituency});
    }
    else if(enteredConstituency.length<3)
    {
        console.error('Length is less than 3!');
    }
    else if(Number(enteredConstituency))
    {
        console.error('Cannot be numeric!');
    }
    else
    {
        console.error('Constituency can only have characters!')
    }
    console.log({enteredConstituency});
}

function handleSubmit(event)
{
    event.preventDefault();
    const data = new FormData(event.target);
    const electionName = data.get('electionName');
    console.log({electionName});
    const state = data.get('state');
    console.log({state});
    const constituency = data.get('constituency');
    console.log({constituency});
    const date = data.get('date');
    console.log({date});

    const electionObj = new Election(electionName, state, constituency, date);
    <GetCandidateList election = {electionObj}/>
}

export default CastVote;