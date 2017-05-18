/*eslint-disable import/default*/ //for configure store
import React from 'react';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import App from './components/App';
import {loadNotes} from './actions/notesActions';
import DevTools from './../client/components/DevTools';

const store = configureStore();

render(
    <Provider store={store}>
        <div className="wrapper">
            <App />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('app')
);
