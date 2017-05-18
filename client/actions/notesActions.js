import * as types from './actionTypes';
import api from '../api'

function loadNotesRequest() {
    return {
        type: types.LOAD_NOTES_REQUEST
    };
}
function loadNotesSuccess(data) {
    return {
        type: types.LOAD_NOTES_SUCCESS,
        payload: data
    };
}

export function loadNotes() {
    return (dispatch) => {
        dispatch(loadNotesRequest());
        api.listNotes()
            .then((response) => {
                return !response.ok
                        ? console.log('Fail')
                        : response.json()
            }).then(response => {
                dispatch(loadNotesSuccess(response))
            })
    }
}

export function createNote(note) {
    return (dispatch) => {
        api.createNote(note)
            .then((response) => {
                return !response.ok
                    ? console.log('Fail')
                    : response.json()})
            .then(() => dispatch(loadNotes()));
    };
}