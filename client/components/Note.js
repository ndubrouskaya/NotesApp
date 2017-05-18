import React from 'react';
import PropTypes from 'prop-types';

import './Note.scss';

class Note extends React.Component {
    render() {
        const style = { backgroundColor: this.props.note.color };

        return (
            <div className='note' style={style}>
                <span className='note__del-icon' onClick={this.props.onDelete}> × </span>
                {
                    this.props.note.title
                        ? <h4 className='note__title'>{this.props.note.title}</h4>
                        : null
                }
                <div className='note__text'>{this.props.note.text}</div>
            </div>
        );
    }
}

Note.propTypes = {
    note: PropTypes.object,
    onDelete: PropTypes.func
};

export default Note;