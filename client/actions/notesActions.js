import * as types from './actionTypes';
import api from '../api';

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

export function setActiveNote(id) {
    return {
        type: types.SET_ACTIVE_NOTE,
        payload: id
    };
}


export function loadNotes() {
    return (dispatch) => {
        dispatch(loadNotesRequest());
        api.listNotes()
            .then(response => (
                !response.ok
                    ? console.log('Fail')
                    : response.json()
            ))
            .then(response =>
                dispatch(loadNotesSuccess(response))
            );
    };
}

export function createNote(note) {
    return (dispatch) => {
        api.createNote(note)
            .then(response => (
                !response.ok
                    ? console.log('Fail')
                    : response.json()
            ))
            .then(() => dispatch(loadNotes()));
    };
}

export function deleteNote(noteId) {
    return (dispatch) => {
        api.deleteNote(noteId)
            .then(response => (
                !response.ok
                    ? console.log('Fail delete')
                    : response.json()
            ))
            .then(() => dispatch(loadNotes()));
    };
}

export function updateNote(data) {
    return (dispatch) => {
        api.updateNote(data)
            .then(response => (
                !response.ok
                    ? console.log('Fail update')
                    : response.json()
            ))
            .then(() => dispatch(loadNotes()));
    };
}
