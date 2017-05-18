import React from 'react';

import './NotesEditor.scss';

class NotesEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            color: '#ffffff'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
        this.setState({
            title: '',
            text: '',
            color: '#ffffff'
        });
    }

    render() {
        return (
            <div className="notes-editor">
                <input
                    name="title"
                    type="text"
                    className="notes-editor__title"
                    placeholder="Enter title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <textarea
                    name="text"
                    rows="5"
                    placeholder="Enter note text"
                    className="notes-editor__text"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <div className="notes-editor__footer">
                    <button
                        className="notes-editor__button"
                        disabled={!this.state.text}
                        onClick={this.handleNoteAdd} >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default NotesEditor;