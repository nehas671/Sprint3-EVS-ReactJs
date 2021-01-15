import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button, Card, Table} from 'react-bootstrap';
import Election from '../models/election';
import CastVoteModel from '../models/castVoteModel';
import getCandidateListAction from '../actions/getCandidateAction';
import castVoteAction from '../actions/castVoteAction';
import Slogan from './slogan';
import { BrowserRouter as Router,  Switch,  Route,  Link, useHistory } from "react-router-dom";
import Footer from "./footer";
import VoterHeader from './voterHeader';
import VoterAsideComponent from './voterAside'

let dispatch;
let listState = false;
let history;

function handleElectionNameChange(event)
{
    var enteredElectionName=event.target.value;
    if(enteredElectionName ==="")
    {
        event.target.classList.remove('custom-valid');
        event.target.classList.add('custom-invalid');
        console.error("Please select election name from drop down!")
    }
    else
    {
        event.target.classList.remove('custom-invalid');
        event.target.classList.add('custom-valid');
        console.log({enteredElectionName});
    }
}

function handleStateChange(event)
{
    var enteredState=event.target.value;
    let inputdata = enteredState;
    let string = inputdata.trim();
    let pattern = /[a-zA-Z]{3,}$/;
    if(pattern.test(string) && string != "")
    {
        console.log({enteredState});
        event.target.classList.remove('custom-invalid');
        event.target.classList.add('custom-valid');
    }
    else 
    {
        event.target.classList.remove('custom-valid');
        event.target.classList.add('custom-invalid');
        console.error('State should have characters only!')
    }
}

function handleConstituencyChange(event)
{
    var enteredConstituency=event.target.value;
    let inputdata = enteredConstituency;
    let string = inputdata.trim();
    let pattern = /[a-zA-Z]{3,}$/;
    if(pattern.test(string) && string != "")
    {
        console.log({enteredConstituency});
        event.target.classList.remove('custom-invalid');
        event.target.classList.add('custom-valid');
    }
    else 
    {
        event.target.classList.remove('custom-valid');
        event.target.classList.add('custom-invalid');
        console.error('Constituency should have characters only!')
    }
}
function handleCandidateNameChange(event)
{
    var enteredCandidateName=event.target.value;
    let inputdata = enteredCandidateName;
    let string = inputdata.trim();
    let pattern = /[a-zA-Z]{3,}$/;
    if(pattern.test(string) && string != "")
    {
        console.log({enteredCandidateName});
        event.target.classList.remove('custom-invalid');
        event.target.classList.add('custom-valid');
    }
    else 
    {
        event.target.classList.remove('custom-valid');
        event.target.classList.add('custom-invalid');
        console.error('Candidate Name should have characters only!');
    }
}

function handlePartyNameChange(event)
{
    var enteredPartyName=event.target.value;
    let inputdata = enteredPartyName;
    let string = inputdata.trim();
    let pattern = /[a-zA-Z]{3,}$/;
    if(pattern.test(string) && string != "")
    {
        console.log({enteredPartyName});
        event.target.classList.remove('custom-invalid');
        event.target.classList.add('custom-valid');
    }
    else 
    {
        event.target.classList.remove('custom-valid');
        event.target.classList.add('custom-invalid');
        console.error('Party Name should have characters only!');
    }
}



function renderTableData(candidateList) 
{
    return candidateList.map((candidate, index) => {
        const { candidateName, partyName } = candidate //destructuring
        return (
        <tr key={index}>
            <td>{candidateName}</td>
            <td>{partyName}</td>
        </tr>
        )
    })
};


const handleList = (event)=>
{
    event.preventDefault();
    const data = new FormData(event.target);
    
    const election_name = data.get('electionName');
    console.log({election_name});
    
    const state = data.get('state');
    console.log({state});
    
    const constituency = data.get('constituency');
    console.log({constituency});
    
    const date = data.get('date');
    console.log({date});

    const electionObj = new Election(election_name, state, constituency, date);

    dispatch(getCandidateListAction(electionObj));
    
    const candidateList = dispatch(getCandidateListAction(electionObj));
    if(candidateList!=null)
    {
        listState = true;
    }
}

const CastVote =(props)=>
{   
    let candidateList = useSelector((state) => state.castVoteReducer.candidates);

    const electionNameRef = useRef(null);
    const stateRef = useRef(null);
    const constituencyRef = useRef(null);
    const dateRef = useRef(null);
    const candidateNameRef = useRef(null);
    const partyNameRef = useRef(null);
    const voterIDRef = useRef(null);

    dispatch = useDispatch();
    
    history = useHistory();

    console.log("candidateList:", candidateList);

    if(!Array.isArray(candidateList))
    {
        candidateList = [];
        console.log("Set candidateList to blank array");
    }
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

    const handleSubmit=(event)=>
    {
        event.preventDefault();
        console.log("In handle submit")
        
        let election_name = electionNameRef.current.value;
        console.log({election_name});
        
        let state = stateRef.current.value;
        console.log({state});
        
        let constituency = constituencyRef.current.value;
        console.log({constituency});
        
        let date = dateRef.current.value;
        console.log({date});
        
        let candidate_name = candidateNameRef.current.value;
        console.log({candidate_name});
        
        let party_name = partyNameRef.current.value;
        console.log({party_name});
        
        let voter_id = voterIDRef.current.value;
        console.log({voter_id});

        const castVoteObj = new CastVoteModel(election_name, state, constituency, date, candidate_name, party_name, voter_id);

        dispatch(castVoteAction(castVoteObj));
        history.push('/votecast');
        console.log({castVoteObj});
    }

    return(
    <div>
        <Router>
            <Link to="/votecast"></Link>
        </Router>
        <VoterHeader/>
        <main>
            <Slogan />
            <section className = 'Custom-container technology-container'>
                <div className="row mx-0 px-sm-0 mb-4">
                    <div className="col-8  pl-0 pr-5">
                        <div className="col border border-dark bg-light p-5 ml-auto mr-auto">
                            <h4>Please fill the details as required to cast your vote</h4>
                            <br></br>
                            <Card border='primary'>
                                <Card.Body>
                                    <form onSubmit={handleList}>
                                        <div className="form-group row pb-2">
                                            <label htmlFor='electionName' className='col-3 col-form-label font-weight-bold'>
                                                Election Name:
                                            </label>
                                            <div>
                                                <select id="electionName" name="electionName" ref={electionNameRef} onBlur={handleElectionNameChange} required>
                                                    <option></option>
                                                    <option>Lok Sabha</option>
                                                    <option>Vidhan Sabha</option>
                                                </select>
                                                <small id="namevalid" class="form-text text-danger invalid-feedback">
                                                    Please select valid Election Name from the list!
                                                </small>
                                            </div>
                                        </div>
                                        <div className="form-group row pb-2">
                                            <label htmlFor="state" className='col-3 col-form-label font-weight-bold'>
                                                Election State:
                                            </label>
                                            <div>
                                                <input id="state" name="state" type="text" placeholder="Eg. Maharashtra"  ref={stateRef} onBlur={handleStateChange} required/>
                                                <small id="namevalid" class="form-text text-danger invalid-feedback">
                                                    State should only contain characters!
                                                </small> 
                                            </div>
                                        </div>
                                        <div className="form-group row pb-2" >
                                            <label htmlFor='constituency' className='col-3 col-form-label font-weight-bold' >
                                                Constituency:
                                            </label>
                                            <div>
                                                <input id='constituency' name='constituency' type ='text' placeholder='Eg. Mumbai' ref={constituencyRef} onBlur={handleConstituencyChange} required></input>
                                                <small id="namevalid" class="form-text text-danger invalid-feedback">
                                                    Constituency should only contain characters!
                                                </small>
                                            </div>
                                        </div>
                                        <div className="form-group row pb-2">
                                            <label htmlFor='date' className='col-3 col-form-label font-weight-bold' >
                                                Election Date:
                                            </label>
                                            <div>
                                                <input type='text' id='date' name='date' ref={dateRef} value={date} readOnly></input>
                                            </div>
                                        </div>
                                        <Button type = 'submit' variant='outline-primary'>Get Candidate List</Button>
                                    </form>
                                    {
                                    listState?
                                    <div>
                                        <div>
                                            <br></br>
                                            <h4>Choose a Candidate from the below List</h4>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Candidate Name</th>
                                                        <th>Party Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {renderTableData(candidateList)}
                                                </tbody>
                                            </Table>
                                        </div>
                                        <br></br>
                                        <div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group row pb-2" >
                                                    <label htmlFor="candidate_name" className='col-4 col-form-label font-weight-bold' >
                                                        Candidate Name:
                                                    </label>
                                                    <div>
                                                        <input id="candidate_name" name="candidate_name" type="text" placeholder="Candidate Name"  ref={candidateNameRef} onBlur={handleCandidateNameChange} required/>
                                                        <small id="namevalid" class="form-text text-danger invalid-feedback">
                                                            Candidate Name should only contain characters!
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="form-group row pb-2">
                                                    <label htmlFor="party_name" className='col-4 col-form-label font-weight-bold'>
                                                        Party Name:
                                                    </label>
                                                    <div>
                                                        <input id="party_name" name="party_name" type="text" placeholder="Party Name"  ref={partyNameRef} onBlur={handlePartyNameChange} required/>
                                                        <small id="namevalid" class="form-text text-danger invalid-feedback">
                                                            Party Name should only contain characters!
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className = 'form-group row pb-2'>
                                                    <label htmlFor="voter_id" className='col-4 col-form-label font-weight-bold'>
                                                        Voter ID:
                                                    </label>
                                                    <div>
                                                        <input id="voter_id" name="voter_id" type="number" placeholder="Voter ID"  ref={voterIDRef} required/>
                                                    </div>
                                                </div>
                                                <Button type='submit' variant='outline-success'>Click to submit your Vote</Button>
                                            </form>
                                        </div>
                                    </div>
                                    :null
                                    }
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <VoterAsideComponent/>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
    );
};

export default CastVote;