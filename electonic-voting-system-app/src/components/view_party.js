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
import AdminHeader from './adminheader'


let dispatch;

const ViewParty = (props) => {


    let partyList = useSelector(state => state.partyReducer);

    dispatch = useDispatch();
    React.useEffect(() => {
        PartyList()
      }, []);
    
      const PartyList = () => {
        dispatch(showPartyAction())
      }

    console.log("partyList: ", partyList);


    return (
        <div>
  

  <AdminHeader/>

  
      <main>
  
        <Slogan/>
         
  
          <section class="Custom-container technology-container">
              <div class="row mx-0 px-sm-0 mb-4">
                                
  
              <div class="col-8  pl-0 pr-5">
              <div >
              <div class="col border border-dark bg-light p-5 ml-auto mr-auto">
            
<h2 class="font-weight-bold" >VIEW PARTY</h2><br/>

    <div class=" h-100 p-12"><br/><br/>
    
    
    <table class="table table-border table-striped"  >
    <thead>
        <tr>
            <th>PartyName</th>
            <th>LeaderName</th>
            <th>Symbol</th>
            
        </tr>
    </thead>
    <tbody>
        {renderTableData(partyList)}
    </tbody>
    </table>
    </div>
   
    
</div></div>
              </div>
              
              <Aside/>
             
              </div>
          </section>
  
      </main>
  
     <Footer/>
  
          
  </div>
  )
}

function renderTableData(partyList) {
    console.log("partyList: ", partyList);
    return partyList.map((party, index) => {
       const { party_name, leader, symbol} = party //destructuring
       return (
          <tr key={party_name}>
              <td>{party_name}</td>
             <td>{leader}</td>
             <td>{symbol}</td>
          </tr>
       )
    })
  };
  
export default ViewParty