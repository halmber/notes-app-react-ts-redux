import { Note, Status, TableDataType, TableHeaderType } from "../../types/types";
import Table from "../Table";
import { NOTES_TABLE_STRING_HEADERS } from "../../constants/constants";
import { getLocalStringDate } from "../../shared/functions/getLocalStringDate";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { deleteNote, editNote, handleArchive, switchTableView } from "../../store/reducers/noteSlice";
import ActionButtons from "./components/ActionButtons";
import { ArchiveIcon } from "./components/ActionIcons";
import ModalForm from "../ModalForm";
import { useState } from "react";

interface NotesTableProps {
    notes: Note[];
}

const NotesTable: React.FC<NotesTableProps> = ({ notes }) => {
    const tableView = useAppSelector((store) => store.notes.tableView);
    const dispatch = useAppDispatch();
    const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);

    const preparedNotes: Note[] = notes.filter(
        (note) => note.status === (tableView === Status.ACTIVE ? Status.ACTIVE : Status.ARCHIVED),
    );

    const changeTableView = () => {
        dispatch(switchTableView());
    };

    const handleClickEdit = (note: Note) => {
        if (noteToEdit) return;
        setNoteToEdit(note);
    };

    const onCloseModal = () => {
        setNoteToEdit(null);
    };

    const handleEdit = (note: Note) => {
        dispatch(editNote(note));
    };

    const handleClickArchive = (id: number) => {
        dispatch(handleArchive(id));
    };

    const handleDelete = (id: number) => {
        dispatch(deleteNote(id));
    };

    const notesTableData: TableDataType = preparedNotes.map((note) => {
        return [
            note.name,
            getLocalStringDate(note.created),
            note.category,
            note.content,
            note.dates.join(", "),
            <ActionButtons
                note={note}
                handleEdit={handleClickEdit}
                handleClickArchive={handleClickArchive}
                handleDelete={handleDelete}
            />,
        ];
    });

    const notesTableHeader: TableHeaderType = [
        ...NOTES_TABLE_STRING_HEADERS,
        <ArchiveIcon handleClick={changeTableView} />,
    ];

    return (
        <>
            <Table headers={notesTableHeader} data={notesTableData} />
            {noteToEdit && (
                <ModalForm
                    title="Edit note"
                    open={Boolean(noteToEdit)}
                    existingNote={noteToEdit}
                    onConfirm={handleEdit}
                    onClose={onCloseModal}
                />
            )}
        </>
    );
};

export default NotesTable;
