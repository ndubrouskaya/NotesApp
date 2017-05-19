import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import DevTools from '../components/DevTools';

export default function configureStore() {
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            DevTools.instrument()
        )
    );
}