import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Modal } from 'react-bootstrap';
import { getNoteById } from '../../selectors/noteSelector';

import './ModalDialog.scss';

class ModalDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.note._id,
            title: this.props.note.title,
            text: this.props.note.text,
            color: this.props.note.color,
            createdAt: this.props.note.createdAt
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={() => this.props.onClose()}
            >
                <Modal.Header>
                    <Modal.Title>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea
                        name="text"
                        rows="5"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={() => this.props.onClose()}
                    >
                        Cancel
                    </button>
                    <button
                        className="save-btn"
                        onClick={() => this.props.onSave(this.state)}
                    >
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ModalDialog.propTypes = {
    note: PropTypes.obj,
    show: PropTypes.bool,
    onSave: PropTypes.func,
    onClose: PropTypes.func
};

const mapStateToProps = state => ({
    note: getNoteById(state.notesReducer.notes, state.notesReducer.activeNoteId)
});

export default connect(mapStateToProps)(ModalDialog);
