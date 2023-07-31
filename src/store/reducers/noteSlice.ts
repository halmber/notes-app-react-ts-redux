import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Note, StateOfNotes, Status } from "../../types/types";
import { initialNotes } from "../../initialData/initialNotesData";

const initialState: StateOfNotes = {
    notes: initialNotes,
    tableView: Status.ACTIVE,
};

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<Note>) {
            state.notes.push(action.payload);
        },
        editNote(state, action: PayloadAction<Note>) {
            const index = state.notes.findIndex((note) => note.created === action.payload.created);

            if (index !== -1) {
                state.notes[index] = action.payload;
            }
        },
        deleteNote(state, action: PayloadAction<number>) {
            const index = state.notes.findIndex((note) => note.created === action.payload);

            if (index !== -1) {
                state.notes.splice(index, 1);
            }
        },
        handleClickArchive(state, action: PayloadAction<number>) {
            const index = state.notes.findIndex((note) => note.created === action.payload);

            if (index !== -1) {
                state.notes[index].status = state.tableView === Status.ACTIVE ? Status.ARCHIVED : Status.ACTIVE;
            }
        },
    },
});

export const { addNote, editNote, deleteNote, handleClickArchive } = notesSlice.actions;

export default notesSlice.reducer;
