import mongoose from 'mongoose';

import '../models/Note';

import config from '../../etc/config.json';

const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.Promise = global.Promise; // because mongoose promises deprecated
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
    mongoose.set('debug', true);
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}

export function updateNote(data) {
    return Note.findById(data._id, (err, note) => {
        note.title = data.title;
        note.text = data.text;
        return note.save(err => {
            !err ? console.log("updated") : console.log(err);
        });
    });
}