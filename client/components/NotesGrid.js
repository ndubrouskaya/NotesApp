import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import Note from './Note';

import './NotesGrid.scss';

class NotesGrid extends React.Component {
    render() {
        const { notes, onNoteDelete, onNoteEdit } = this.props;
        const masonryOptions = {
            columnWidth: 250,
            itemSelector: '.note',
            gutter: 10,
            isFitWidth: true
        };
        return (
            <Masonry className='notes-grid' options={masonryOptions}>
                {notes.map(note =>
                    <Note
                        key={note._id}
                        note={note}
                        onDelete={onNoteDelete.bind(null, note)} />)
                }
            </Masonry>
        );
    }
}

NotesGrid.propTypes = {
    notes: PropTypes.array,
    onNoteDelete: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        notes: state.notes.notes
    };
};

export default connect(mapStateToProps)(NotesGrid);