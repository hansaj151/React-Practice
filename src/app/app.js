/**
 * Created by hansaj on 17/5/17.
 */
import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Apple from './apple';
import RootReducer from './reducers';

let store = createStore(RootReducer);

render (
    <Provider store = {store}>
        <Apple/>
    </Provider>,
    document.getElementById('root')
);

