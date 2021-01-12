import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Evs.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

