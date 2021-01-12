import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Evs.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose ,combineReducers} from 'redux';
import stateReducer from './reducers/stateReducer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import resultReducer from './reducers/resultReducer';



let allReducers= combineReducers({'stateReducer':stateReducer, 'resultReducer':resultReducer})
let myStore = createStore(allReducers,
  compose(applyMiddleware(ReduxThunk)
  ));

myStore.subscribe(()=>console.log('Current State: ', myStore.getState()));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider store={myStore}>
    <App />
    </Provider>
    </BrowserRouter>
=======
import { createStore, applyMiddleware, compose } from 'redux';
import castVoteReducer from './reducers/voteReducer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

let store = createStore(castVoteReducer, 
  compose(applyMiddleware(ReduxThunk)));

store.subscribe(()=>console.log('Current State: ', store.getState()));


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
>>>>>>> 0fd64cba6f5076fb212c490b49cab564129aca81
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

