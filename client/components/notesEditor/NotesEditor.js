import React from 'react';

import ColorPicker from './../colorPicker/ColorPicker';

import './NotesEditor.scss';

class NotesEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            color: '#ffffb3'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleColorChange =this.handleColorChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleColorChange(color) {
        this.setState({
            color
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
            color: '#ffffb3'
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
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange}/>
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