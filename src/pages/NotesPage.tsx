import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import NotesTable from "../components/NotesTable/NotesTable";
import { Note, Status } from "../types/types";
import ModalForm from "../components/ModalForm";
import { addNote } from "../store/reducers/noteSlice";
import SummaryTable from "../components/SummaryTable/SummaryTable";

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
        <div className="max-w-5xl w-full m-auto">
            <h1 className="text-3xl font-bold">Notes app</h1>
            <div className="w-full flex justify-between items-center h-10">
                <h2>{tableView === Status.ARCHIVED ? "Archived notes" : ""}</h2>
                <button onClick={handleClickAdd}>Add note</button>
            </div>
            <NotesTable notes={notes} />
            <SummaryTable notes={notes} />
            {openModal && (
                <ModalForm
                    title="Add note"
                    onConfirm={handleAddNote}
                    onClose={() => setOpenModal((prev) => !prev)}
                    existingNote={null}
                />
            )}
        </div>
    );
};

export default NotesPage;
