import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App/App';
import reducers from './reducers';

//Dev environment only axios helpers - temporary axios code to test back end 
import axios from 'axios';
window.axios = axios;

//the first argument to createStore is/are the reducer(s) to our app and the second is the initial state of the application which is most important during server side rendering.
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//We will pass the newly created store variable as a prop.  Then we will pass the App component to the Provider tag as the Provider's child.  The redux store is now hooked up to the react application.  The provider tag is a React component that knows how to read changes from our Redux store.  Whenever the store receives gets some new state produced inside of it the Provider will inform all its children that some new state is available and update all the components with the new state.
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);

