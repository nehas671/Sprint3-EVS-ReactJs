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
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';


let allReducers= combineReducers({'castVoteReducer':castVoteReducer,'electionReducer':electionReducer,"candidateReducer":candidateReducer})
let store = createStore(allReducers, 
  compose(applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));




store.subscribe(()=>console.log('Current State: ', store.getState()));


ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
