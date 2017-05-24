import * as types from '../actions/actionTypes';

const initialState = {
    notes: [],
    activeNoteId: ''
};
export default function notesReducer(state = initialState, action) {
    switch(action.type) {
        case types.LOAD_NOTES_REQUEST:
        {
            const newState = Object.assign({}, state);
            newState.activeNoteId = '';
            return newState;
        }
        case types.LOAD_NOTES_SUCCESS:
        {
            const newState = Object.assign({}, state);
            newState.notes = action.payload;
            return newState;
        }
        case types.SET_ACTIVE_NOTE:
        {
            const newState = Object.assign({}, state);
            newState.activeNoteId = action.payload;
            return newState;
        }
        default:
            return state;
    }
}