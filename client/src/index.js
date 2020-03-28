import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Reducers specify how the application's state changes in response to actions 
// sent to the store. Remember that actions only describe what happened,
//  but don't describe how the application's state changes.

// With a plain basic Redux store, you can only do simple synchronous updates 
// by dispatching an action. Middleware extend the store's abilities,
//  and let you write async logic that interacts with the store.

// Redux Thunk middleware allows you to write action creators that 
// return a function instead of an action. The thunk can
// be used to delay the dispatch of an action, or to 
// dispatch only if a certain condition is met. The inner function 
// receives the store methods dispatch and getState as parameters.

// Redux DevTools for debugging application's state changes.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// The store in Redux is kind of magic and holds all of the application's state.
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.querySelector('#root'));