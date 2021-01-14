import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Evs.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import electionReducer from './reducers/electionReducer';
import castVoteReducer from './reducers/voteReducer';
import candidateReducer from './reducers/candidateReducer';
import resultReducer from './reducers/resultReducer';
import OfficerReducer from './reducers/officerReducer';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter} from "react-router-dom";
import userReducer from './reducers/userReducer';

import stateReducer from './reducers/stateReducer';


let allReducers= combineReducers({'castVoteReducer':castVoteReducer,'electionReducer':electionReducer,"candidateReducer":candidateReducer,'resultReducer':resultReducer,'stateReducer':stateReducer
,'officerReducer':OfficerReducer, 'userReducer':userReducer})
let store = createStore(allReducers, 
  compose(applyMiddleware(ReduxThunk)
  ) );




store.subscribe(()=>console.log('Current State: ', store.getState()));


ReactDOM.render(
  <React.StrictMode>

     <Provider store={store}>
     <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()