import { Container } from "react-bootstrap";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Party from '../models/party'; 
import showPartyAction from '../actions/view_party'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel'
import { BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import Header from "./header";
import Slogan from "./slogan";
import Aside from "./aside";
import Footer from "./footer";
import AdminHeader from "./adminheader";

import GetAllByLeader from '../actions/partyGetAllPartyByLeader';
import GetAllBySymbol from '../actions/partyGetAllBySymbol';

import GetLeaderAction from '../actions/party_getAllLeader';
import GetSymbolAction from '../actions/party_getAllSymbol';
import AdminAsideComponent from './adminAside';
import { useState } from 'react';

let dispatch;
let selectedview;
let selectedOption;

const ViewParty = (props) => 
{
    let [filter, setFilter] = useState();
    let [initialState, setInitialState] = useState();
    let partyList = useSelector(state => state.partyReducer.initialState);
  
    let filterList = useSelector(state => state.partyReducer.filter);
    dispatch = useDispatch();

    console.log("partyList: ", partyList);
    if(!Array.isArray(partyList))
    {
        partyList = [];
      console.log("Set partyList to blank array");
    }
    
    if(!Array.isArray(filterList))
    {
      filterList=[];
      console.log("Set partyList to blank array")
    }
  

    const searchHandleChange = (event) =>
  {
    selectedOption = event.target.value;
    console.log("Selected option: " + selectedOption);
    
   
    if(selectedOption === "Leader")
    {
      dispatch(GetLeaderAction())
      .then((response) =>
      {
        console.log("REsponse: ", response);
        console.log("filterList: ", filterList);
        setFilter(filterList);
      });
    }
    else if(selectedOption === "Symbol")
    {
      dispatch(GetSymbolAction())
      .then((response) =>
      {
        console.log("REsponse: ", response);
        console.log("filterList: ", filterList);
        setFilter(filterList);
      });
    }
    
  }

  function handleSearch(event)
  {
    event.preventDefault();
    if(selectedOption==="View All")
    {  
      dispatch(showPartyAction())
      .then((response) =>
      {
        console.log("REsponse: ", response);
        console.log("routeList: ", partyList);
        setInitialState(partyList);
      });
    }
    else if(selectedOption==="Leader")
    {
      dispatch(GetAllByLeader(selectedview))
      .then((response) =>
      {
        console.log("Response: ", response);
        console.log("routeList: ", partyList);
        setInitialState(partyList);
      });
    }
    else if(selectedOption==="Symbol")
    {
      dispatch(GetAllBySymbol(selectedview))
      .then((response) =>
      {
        console.log("REsponse: ", response);
        console.log("routeList: ", partyList);
        setInitialState(partyList);
      });
    }
  }

  return(
    <div>
      <AdminHeader/>
      <main>
        <Slogan/>
        <section class="Custom-container technology-container">
          <div class="row mx-0 px-sm-0 mb-4  ">
            <div class="col-8  border border-dark pl-0 pr-5 bg-light">
              <div class="container pt-5 px-5 ">
                <h3 class="addPartyTitle mb-3">
                  VIEW PARTY
                </h3>
                <form onSubmit={handleSearch} class="d-flex mb-4" onMouseMove={EnableDisable}>
                  <div className="col-9">
                    <div class=" form-inline row mb-3">
                      <label for="view" class=" mr-3 font-weight-bold mr-4">
                        View Party By :
                      </label>
                      <select class="form-control col-5 " id="view" onChange={searchHandleChange} required>
                        <option>Select View By</option>
                        <option>View All</option>
                        <option>Leader</option>
                        <option>Symbol</option>
                      </select>
                    </div>
                    <div class="item form-inline row ">
                      <label for="view" class=" mr-3 font-weight-bold mr-4">
                        Filter :
                      </label>
                      <select id="filter" onChange={filterHandleChange} required class="w-50 form-control">
                        <option>select</option>
                        {renderFilterList(filterList)}
                      </select>
                    </div>
                  </div>
                  <div class="mt-4">
                    <button className="btn btn-primary" id="btnsubmit" disabled="disabled">Search</button>
                  </div>
                </form>
                <center>
                  <h2 class="font-weight-bold">
                    Party List
                  </h2>
                  <table class="table table-border table-striped">
                    <thead>
                      <tr>
                        <th>Party Name</th>
                        <th>Leader</th>
                        <th>Symbol</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderTableData(partyList)}
                    </tbody>
                  </table>
                </center>
              </div>
            </div>
          <AdminAsideComponent/>
          </div>
        </section>
      </main>
    <Footer/>
    </div>
    );
  };


    function EnableDisable(event)
    {
    event.preventDefault();
    
    var btnsubmit=document.getElementById("btnsubmit");
    console.log("selectedOption",selectedOption);
    
    let option=undefined;
    if(selectedOption!=undefined)
    {  
        btnsubmit.disabled=false;
    }
    else
    {
        btnsubmit.disabled=true;
    } 

    }

        function renderTableData(partyList)
    {
    console.log("partyList: ", partyList);
    return partyList.map((party, index) =>
    {
        const {  party_name, leader, symbol} = party //destructuring
        return (
        <tr key={party_name}>
        <td>{party_name}</td>
        <td>{leader}</td>
        <td>{symbol}</td>
        </tr>
        )
    })
    };

        function filterHandleChange(event)
    {
    selectedview = event.target.value
    console.log("Selected view: " + selectedview);
    }

    function renderFilterList(filterList)
    {
    console.log("filterList", filterList);
    return filterList.map((value) =>
    {
        return(
        <option value = {value}>{value}</option>
        )
    })
    } 
  



  export default ViewParty;