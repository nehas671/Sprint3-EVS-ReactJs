import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Form, FormGroup, Button, Card, Table} from 'react-bootstrap';
import Election from '../models/election';
import CastVoteModel from '../models/castVoteModel';
import getCandidateListAction from '../actions/getCandidateAction';
import castVoteAction from '../actions/castVoteAction';
import { useHistory } from "react-router-dom";
import Slogan from './slogan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import Header from "./header";
import Aside from "./aside";
import Footer from "./footer";

let dispatch;
let listState = false;
let history;

const CastVote =(props)=>
{   
    let candidateList = useSelector((state) => state.castVoteReducer.candidates);

    //let voteList = useSelector(state => state.castVoteReducer.castvote);
    
    //React.useEffect(() => {
     //   VoteList()
     //}, []);
  
     //const VoteList = () => {
       //dispatch(castVoteAction())
     //}


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
        history.push('/');
        console.log({castVoteObj});

    }

    return(
    <div>

        {/* <Router>
            <Link to="/voter/castvote"></Link>
        </Router> */}
        <header class="Custom-container py-md-2 py-3">
            <div class="header-before"><span class="mr-4"><img src="logo.jpg" alt="brand-name" class="logo"/></span><h1 class="d-inline">Electronic Voting System</h1></div>
            <nav class="navbar navbar-expand-md  navbar-light d-md-block d-lg-flex px-sm-0 py-0 text-wrap ">
                {/*<div class="navbar-brand nav-custom-brand mb-3 mb-md-0 py-0"></div>*/}
                <button class="navbar-toggler  custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav flex-wrap w-100">
                        <li class="nav-item  nav-item-custom mb-2 mb-md-0 flex-wrap ">
                            <a class="nav-link text-dark border-primary nav-custom-link px-md-0 " href="#">Home</a>
                        </li>
                        <li class="nav-item  nav-item-custom  mb-2 mb-md-0 flex-wrap ">
                            <a class="nav-link text-dark px-md-0 border-primary nav-custom-link  " href="#">About Us</a>
                        </li>
                        <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                            <a class="nav-link text-dark px-md-0 border-primary  nav-custom-link" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                            <a class="nav-link text-dark px-md-0  border-primary  nav-custom-link " href="#">CastVote</a>
                        </li>
                    </ul>
                    <div class=" d-flex sky-color search-box ">
                        <input type="search" class=" border-0 sky-color  ml-md-auto" placeholder="search..."></input>
                        <div class="">
                            <button class=" btn search-button border-0 sky-color " type="button" id="search-button" ><FontAwesomeIcon icon={icons.faSearch} /></button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <Slogan />
        <Card padding='3'>
            <Card.Body>
        <h4>Please fill the details as required to cast your vote</h4>
        <Form onSubmit={handleList}>    
            <FormGroup>
                <label htmlFor='electionName'>Election Name: *&nbsp;</label>
                <select id="electionName" name="electionName" ref={electionNameRef} onBlur={handleElectionNameChange} required>
                    <option></option>
                    <option>Lok Sabha</option>
                    <option>Vidhan Sabha</option>
                </select>
                {/* <small id="namevalid" class="form-text text-danger invalid-feedback">
                    Please select valid Election Name from the list!
                </small> */}
            </FormGroup>
            
            <FormGroup>
                <label htmlFor="state">Election State: *&nbsp;</label>
                <input id="state" name="state" type="text" placeholder="Eg. Maharashtra"  ref={stateRef} onBlur={handleStateChange} required/>
                {/* <small id="namevalid" class="form-text text-danger invalid-feedback">
                    State should only contain characters!
                </small> */}
            </FormGroup>
            
            <FormGroup>
                <label htmlFor='constituency'>Constituency: *&nbsp;</label>
                <input id='constituency' name='constituency' type ='text' placeholder='Eg. Mumbai' ref={constituencyRef} onBlur={handleConstituencyChange} required></input>
                {/* <small id="namevalid" class="form-text text-danger invalid-feedback">
                    Constituency should only contain characters!
                </small> */}
            </FormGroup>
            
            <FormGroup>
                <label htmlFor='date'>Election Date: &nbsp;</label>
                <input type='text' id='date' name='date' ref={dateRef} value={date} readOnly></input>
            </FormGroup>
            
            <Button type = 'submit' variant='outline-primary'>Get Candidate List</Button>
        </Form>
        </Card.Body>
        </Card>

        {
            listState?
        <Card>
            <Card.Body>
                <h2>Choose a Candidate from the below List</h2>
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
            </Card.Body>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                    <label htmlFor="candidate_name">Candidate Name: *&nbsp;</label>
                    <input id="candidate_name" name="candidate_name" type="text" placeholder="Candidate Name"  ref={candidateNameRef} required/>
                    </FormGroup>
                    <FormGroup>
                    <label htmlFor="party_name">Party Name: *&nbsp;</label>
                    <input id="party_name" name="party_name" type="text" placeholder="Party Name"  ref={partyNameRef} required/>
                    </FormGroup>
                    <FormGroup>
                    <label htmlFor="voter_id">Voter ID: *&nbsp;</label>
                    <input id="voter_id" name="voter_id" type="number" placeholder="Voter ID"  ref={voterIDRef} required/>
                    </FormGroup>
                    <Button type='submit' variant='outline-success'>Click to submit your Vote</Button>
            </Form>
            </Card.Body>
        </Card>
        :null
        }
    </div>
    );

};

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

function handleElectionNameChange(event)
{
    var enteredElectionName=event.target.value;
    if(enteredElectionName ==="")
    {
        // event.target.classList.remove('custom-valid');
        // event.target.classList.add('custom-invalid');
        console.error("Please select election name from drop down!")
    }
    else
    {
        // event.target.classList.remove('custom-invalid');
        // event.target.classList.add('custom-valid');
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
        // event.target.classList.remove('custom-invalid');
        // event.target.classList.add('custom-valid');
    }
    else 
    {
        // event.target.classList.remove('custom-valid');
        // event.target.classList.add('custom-invalid');
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

export default CastVote;
