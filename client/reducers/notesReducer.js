import * as types from '../actions/actionTypes';

export default function notesReducer(state = [], action) {
    switch(action.type) {
        case types.LOAD_NOTES_REQUEST:
        {
            return state;
        }
        case types.LOAD_NOTES_SUCCESS:
        {
            return action.payload;
        }
        default:
            return state;
    }
}