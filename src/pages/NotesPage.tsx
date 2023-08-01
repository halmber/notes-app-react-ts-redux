import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import NotesTable from "../components/NotesTable/NotesTable";
import { Note, Status } from "../types/types";
import ModalForm from "../components/ModalForm";
import { addNote } from "../store/reducers/noteSlice";

const NotesPage: React.FC = () => {
    const { notes, tableView } = useAppSelector((store) => store.notes);
    const dispatch = useAppDispatch();
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleClickAdd = () => {
        setOpenModal((prev) => !prev);
    };

    const handleAddNote = (newNote: Note) => {
        dispatch(addNote(newNote));
    };

    return (
        <div className="notes-container">
            <h1>Notes app - vanilla JS</h1>
            <div className="action-panel">
                <h2>{tableView === Status.ARCHIVED ? "Archived notes" : ""}</h2>
                <button onClick={handleClickAdd}>Add note</button>
            </div>
            <NotesTable notes={notes} />
            {openModal && (
                <ModalForm
                    title="Add note"
                    open={openModal}
                    onConfirm={handleAddNote}
                    onClose={() => setOpenModal((prev) => !prev)}
                    existingNote={null}
                />
            )}
        </div>
    );
};

export default NotesPage;
