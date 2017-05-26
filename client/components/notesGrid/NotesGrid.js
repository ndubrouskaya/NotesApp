import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import Note from './../note/Note';

import './NotesGrid.scss';

const masonryOptions = {
    columnWidth: 250,
    itemSelector: '.note',
    gutter: 10,
    isFitWidth: true
};
/* eslint-disable no-debugger */
debugger;
const NotesGrid = ({ notes, onNoteDelete }) => (
    <Masonry className="notes-grid" options={masonryOptions}>
        {notes.map(note => (
            <Note
                key={note._id}
                note={note}
                onDelete={() => onNoteDelete(note)}
            />
        ))}
    </Masonry>
);

NotesGrid.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.obj),
    onNoteDelete: PropTypes.func
};

const mapStateToProps = state => ({
    notes: state.notesReducer.notes
});

export default connect(mapStateToProps)(NotesGrid);
