import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Evs.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
<<<<<<< HEAD
import electionReducer from './reducers/electionReducer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';


let store = createStore(electionReducer, 
  compose(applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
=======
import castVoteReducer from './reducers/voteReducer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

let store = createStore(castVoteReducer, 
  compose(applyMiddleware(ReduxThunk)));
>>>>>>> 1cbf7135899acd1969d054a07fe0169328e0dbf7

store.subscribe(()=>console.log('Current State: ', store.getState()));


ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
     <Provider store={store}>
=======

    <Provider store={store}>
>>>>>>> 1cbf7135899acd1969d054a07fe0169328e0dbf7
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
