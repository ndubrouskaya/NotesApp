export function getNoteById(notes, id) {
    return notes.find(note => note._id === id);
}