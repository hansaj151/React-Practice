/**
 * Created by hansaj on 17/5/17.
 */
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Apple from './apple';
import RootReducer from './reducers';

let store = createStore(
                RootReducer,
                applyMiddleware(thunkMiddleware)
            );

render (
    <Provider store = {store}>
        <Apple/>
    </Provider>,
    document.getElementById('root')
);

