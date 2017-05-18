import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function notesReducer(state = initialState, action) {
    switch(action.type) {
        case types.LOAD_NOTES_REQUEST:
        {
            const newState = Object.assign({}, state);
            return newState;
        }
        case types.LOAD_NOTES_SUCCESS:
        {
            const newState = Object.assign({}, state);
            newState.notes = action.payload;
            return newState;
        }
        default:
            return state;
    }
}