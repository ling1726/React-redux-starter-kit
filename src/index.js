import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';

import App from './App';



// CONFIGURE STORE
let dummyState = {}; // initial states are actually handled by each reducer

let store = createStore(
    rootReducer,
    dummyState,
    applyMiddleware(thunk)    
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,        
    document.getElementById('root')
)
