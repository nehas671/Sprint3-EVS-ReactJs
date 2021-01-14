
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import viewScheduleAction from '../actions/schedule_action'
import {useRef} from 'react'
let selectedElectionId
const ViewScheduleState = (props) => {


    let scheduleList = useSelector(state => state.scheduleReducer);

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
<form>
    choose option:
<select id="schedule" onChange={handleChange}>
               {renderScheduleStates(scheduleList)}
            </select>
            </form>
           </div>)}

function handleChange(event) {
    selectedElectionId = event.target.value
    console.log("selected state: ", selectedElectionId);
}

function renderScheduleStates(scheduleList) {
    console.log("stateList: ", scheduleList);
    //console.log("scheduleList[0].state: ", scheduleList[0].state);
    return scheduleList.map((schedule, index) => {
       const {  electionId,state } = schedule //destructuring
       return (
        <option key={electionId} value={state}>{state}</option>
       )
    })
 };

export default ViewScheduleState

