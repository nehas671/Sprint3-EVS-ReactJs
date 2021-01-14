
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import viewScheduleAction from '../actions/schedule_action'
import {useRef} from 'react'
import viewScheduleStateListAction from '../actions/schedule_statelist_action';
let selectedElectionId
const ViewScheduleState = (props) => {

    let [filter, setFilter] = useState();
    let scheduleList = useSelector(state => state.scheduleReducer.filter);

    const dispatch = useDispatch();
    const myInput = useRef();
    React.useEffect(() => {
        ScheduleList()
      }, []);
    
      const ScheduleList = () => {
        dispatch(viewScheduleStateListAction())
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
    return scheduleList.map((state) => {
      
       return (
        <option value={state}>{state}</option>
       )
    })
 };

export default ViewScheduleState

