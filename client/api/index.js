import { apiPrefix } from '../../etc/config.json';

export default {
    listNotes() {
        return fetch(`${apiPrefix}/notes`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            });
    },

    createNote(data) {
        console.log(data);
        return fetch(`${apiPrefix}/notes`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    },

    deleteNote(noteId) {
        return fetch(`${apiPrefix}/notes/${noteId}`,
            {
                method: 'DELETE'
            });
    },

    updateNote(data) {
        return fetch(`${apiPrefix}/notes/${data._id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            });
    }
};
