import { Container } from "react-bootstrap";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import showStatesAction from '../actions/get_states';
import addElectionAction from '../actions/add_election';
import { useHistory } from "react-router-dom";
import Election from '../models/election';
import States from '../models/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import Header from "./header";
import Slogan from "./slogan";
import Aside from "./aside";
import Footer from "./footer";

function AddParty(){
    return (
        <div>
  
          
          
  
  
          <header class="Custom-container py-md-2 py-3   ">
    <div class="header-before"><span class="mr-4"><img src="logo.jpg" alt="brand-name" class="logo"/></span><h1 class="d-inline">Electronic Voting System</h1></div>
          <nav class="navbar navbar-expand-md  navbar-light d-md-block d-lg-flex px-sm-0 py-0 text-wrap ">
  
  
              {/*<div class="navbar-brand nav-custom-brand mb-3 mb-md-0 py-0">
                  
      </div>*/}
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
                          <a class="nav-link text-dark px-md-0  border-primary  nav-custom-link " href="#">Add Party</a>
                      </li>
                      <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                          <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="#">View Party</a>
                      </li>
                      <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                          <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="#">Logout</a>
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
  
  
  
      <main>
  
        <Slogan/>
         
  
          <section class="Custom-container technology-container">
              <div class="row mx-0 px-sm-0 mb-4">
                                
  
              <div class="col-8  pl-0 pr-5">
              <div class="col border border-dark bg-light p-5 ml-auto mr-auto">
                <h2 class="font-weight-bold">ADD PARTY</h2>
  <form>
    <div class="form-group row pt-4 pb-3">
      <label for="electionName" class="col-4 col-form-label font-weight-bold">Party Name :</label>
      <div class="col-8">
        <input type="text" class="form-control" id="partyName" name="name" placeholder="Enter Party Name" ></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
          Electionname should only  contain characters 
         </small>
      </div>
    </div>
    <div class=" form-group row pb-3">
      <label for="state" class="col-4 col-form-label font-weight-bold">Leader Name :</label>
      <div class="col-8">
        <input type="text" class="form-control" id="leaderName" name="leaderName" placeholder="Enter Leader Name" ></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
          leader name should only  contain characters 
         </small>
      </div>
    </div>
    <div class="form-group row pb-3">
    <label for="constituency" class="col-4 col-form-label font-weight-bold">Symbol :</label>
      <div class="col-8">
        <input type="text"  class="form-control" id="symbol" name="symbol" placeholder="Enter Symbol" ></input>
        <small id="namevalid" class="form-text text-danger invalid-feedback">
          Constituency name should only contain characters
         </small>
      </div>
    </div>
    <center>
        <button class="btn btn-primary" >ADD</button>
        </center>
  </form>
  </div>
              </div>
              
              <Aside/>
             
              </div>
          </section>
  
      </main>
  
     <Footer/>
  
          
  </div>
  )
}
export default AddParty