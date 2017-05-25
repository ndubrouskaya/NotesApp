import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NotesEditor from './notesEditor/NotesEditor';
import NotesGrid from './notesGrid/NotesGrid';
import * as actions from '../actions/notesActions';

import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);
    }

    componentDidMount() {
        this.props.loadNotes();
    }

    handleNoteAdd(data) {
        this.props.createNote(data);
    }

    handleNoteDelete(note) {
        this.props.deleteNote(note._id);
    }

    render() {
        return (
            <div className="content">
                <h1 className="content__header">NotesApp</h1>
                <NotesEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid
                    onNoteDelete={this.handleNoteDelete} />
            </div>
        );
    }
}

App.propTypes = {
    loadNotes: PropTypes.func,
    createNote: PropTypes.func,
    deleteNote: PropTypes.func,
};

const mapActionsToProps = (dispatch) => {
    return {
        loadNotes: () => {
            dispatch(actions.loadNotes());
        },
        createNote: (data) => {
            dispatch(actions.createNote(data))
        },
        deleteNote: (id) => {
            dispatch(actions.deleteNote(id))
        }
    }
};

export default connect(null, mapActionsToProps)(App);