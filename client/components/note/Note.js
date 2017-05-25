import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';

import ModalDialog from './../modalDialog/ModalDialog';
import * as actions from '../../actions/notesActions';

import './Note.scss';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleSave = this.handleSave.bind(this);
    }

    showModal(state) {
        this.setState({
            showModal: state
        }, this.props.setActiveNote(this.props.note._id));
    }

    handleSave(data) {
        this.setState({
            showModal: false
        }, () => this.props.updateNote(data));
    }

    render() {
        const {note, onDelete} = this.props;
        const style = { backgroundColor: note.color };
        return (
            <div className='note' style={style}>
                <span className='note__icon-edit' onClick={() => this.showModal(true)} >
                    <Glyphicon glyph="pencil" />
                </span>
                <span className='note__icon-del' onClick={onDelete.bind(this)} >
                    <Glyphicon glyph="remove" />
                </span>
                {
                    note.title
                        ? <h4 className='note__title'>{note.title}</h4>
                        : null
                }
                <div className='note__text'>{note.text}</div>

                {
                    this.state.showModal &&
                    <ModalDialog
                        show={this.state.showModal}
                        onSave={this.handleSave}
                        onClose={() => this.showModal(false)}
                    />
                }
            </div>
        );
    }
}

Note.propTypes = {
    note: PropTypes.object,
    onDelete: PropTypes.func,
    updateNote: PropTypes.func,
    setActiveNote: PropTypes.func
};

const mapActionsToProps = (dispatch) => {
    return {
        updateNote: (data) => {
            dispatch(actions.updateNote(data))
        },
        setActiveNote: (id) => {
            dispatch(actions.setActiveNote(id))
        }
    };
};

export default connect(null, mapActionsToProps)(Note);