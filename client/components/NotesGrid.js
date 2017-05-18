import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import Note from './Note';

import './NotesGrid.scss';

class NotesGrid extends React.Component {
    render() {
        const masonryOptions = {
            columnWidth: '.grid-sizer',
            itemSelector: '.note',
            gutter: 10,
        };
        return (
            <Masonry className='notes-grid' options={masonryOptions}>
                <div className="grid-sizer"></div>
                {this.props.notes.map(note =>
                    <Note
                        key={note._id}
                        note={note}
                        onDelete={this.props.onNoteDelete}/>)
                }
            </Masonry>
        );
    }
}

NotesGrid.propTypes = {
    notes: PropTypes.array,
    onNoteDelete: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        notes: state.notes.notes
    };
};

export default connect(mapStateToProps)(NotesGrid);