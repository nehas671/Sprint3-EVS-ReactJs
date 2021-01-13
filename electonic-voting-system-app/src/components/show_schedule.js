import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import viewScheduleAction from '../actions/schedule_action'
import {useRef} from 'react'

const ViewSchedule = (props) => {


    let scheduleList = useSelector(state => state);

    const dispatch = useDispatch();
    const myInput = useRef();
    React.useEffect(() => {
        ScheduleList()
      }, []);
    
      const ScheduleList = () => {
        dispatch(viewScheduleAction())
      }
    console.log("schedule: ", scheduleList);
    if(!Array.isArray(scheduleList)) {
        scheduleList = [];
        console.log("Set schedule to blank array");
    }
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
                        <a class="nav-link text-dark px-md-0  border-primary  nav-custom-link " href="#">Login</a>
                    </li>
                    <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
                        <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="#">FAQ</a>
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
    


    <div class="row">
    <div class="col-sm-8">
    
    <h2>Scheduled Elections </h2>
   {/* <form>
    <h4>View schedule by:</h4>
	<select class="form-control" ref='first' id='firstList' name='firstList' onClick={getScheduleBy}>
        {view()}
	</select>
    <h4>Food Item</h4>
	<select class="form-control"  id='secondList' name='secondList' >
	</select></form>*/}
    
    <table  class="table">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">ElectionName</th>
            <th scope="col">State</th>
            <th scope="col">Constituency</th>
            <th scope="col">Date</th>
        </tr>
    </thead>
    <tbody>
        {renderTableData(scheduleList)}
    </tbody>
    </table>
    
    </div>
    
 
  <aside class="col-4  rounded  pr-0  aside-custom d-flex justify-content-center">
  <div class=" border border-dark text-light bg-lg-dark pb-5 quick-link">
  
  <h3>Quick Links</h3>
          <ul class="nav flex-column mb-4">
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">Login</a>
            </li>
          </ul>
          <h3><marquee direction="up" height="210" width="200" >Scrolling News</marquee>
          </h3>
          </div>
          
          </aside>
  
  
   </div>         
  <footer>
        <div class=" footer-before">
            <div class="row Custom-container  word-break">
                <div class="col-lg-6 col-md-6 light-grey mb-3 mb-md-0 px-sm-0 pr-md-4 ">
                    <div class="footer-headings">About Us</div>
                    <p>E-voting which is physically supervised by representatives of governmental or independent electoral authorities.
remote e-voting via the Internet (also called i-voting) where the voter submits his or her vote electronically to the election authorities, from any location.</p>
                </div>


                <div class="col-lg-6 col-md-6  text-lg-right light-grey  mb-3 mb-md-0 px-sm-0 px-md-2">
                    <div class="footer-headings mb-1">Follow Us</div>
                    <div class="d-flex flex-wrap justify-content-lg-end"><i class=" ml-0 fab fa-twitter footer-icons btn rounded-0 text-white "></i>
                        <i class="fab fa-google-plus-g  footer-icons-google btn rounded-0 footer-icons text-white"></i><i class="fab fa-youtube btn rounded-0 footer-icons text-white "></i>
                        <i class="fab fa-skype btn footer-icons-skype rounded-0 footer-icons text-white "></i>
                    </div>
                </div>
            </div>

        </div>
        <div class="footer-after">
            <div class="row Custom-container d-flex justify-content-center py-4 ">
                
                <div class="text-muted small align-center">&copy; Copyright 2021.All Rights Reserved</div>
               
            </div>
        </div>

    </footer>  
            

</div>);
};


function renderTableData(scheduleList) {
    console.log("scheduleList: ", scheduleList);
    return scheduleList.map((schedule, index) => {
        
       const { electionId, election_name, state,constituency,date } = schedule //destructuring
       return (
          <tr key={electionId}>
             <td>{electionId}</td>
             <td>{election_name}</td>
             <td>{state}</td>
             <td>{constituency}</td>
             <td>{date}</td>
          </tr>
       )
    })
 };

 function renderTableData2(scheduleList) {
    console.log("scheduleList: ", scheduleList);
    return scheduleList.map((schedule, index) => {
        
       const { electionId,state } = schedule //destructuring
       return (
          <tr key={electionId}>
             
             <td>{state}</td>
          </tr>
       )
    })
 };
{/*
function view(){
   var list1 = document.getElementById('firstList');
	
		list1.options[0] = new Option('--Select--', '');
		list1.options[1] = new Option('Snacks', 'Snacks');
		list1.options[2] = new Option('Drinks', 'Drinks');
}
 function getScheduleBy(){
   var list1 = document.getElementById("firstList");
 var list2 = document.getElementById("secondList");
 
    var list1SelectedValue = list1.options[list1.selectedIndex].value;
    
    if (list1SelectedValue=='Snacks')
    {
        
        list2.options.length=0;
        list2.options[0] = new Option('--Select--', '');
        list2.options[1] = new Option('Burger', 'Burger');
        list2.options[2] = new Option('Pizza', 'Pizza');
        list2.options[3] = new Option('Hotdog', 'Hotdog');
        list2.options[4] = new Option('Potato Chips', 'Potato Chips');
        list2.options[5] = new Option('French Fries', 'French Fries');
        
    }
    else if (list1SelectedValue=='Drinks')
    {
        
        list2.options.length=0;
        list2.options[0] = new Option('--Select--', '');
        list2.options[1] = new Option('Coca Cola', 'Coca Cola');
        list2.options[2] = new Option('7up', '7up');
        list2.options[3] = new Option('Pepsi', 'Pepsi');
        list2.options[4] = new Option('Coffee', 'Coffee');
        list2.options[5] = new Option('Tea', 'Tea');
        
    }
}
*/}
export default ViewSchedule

