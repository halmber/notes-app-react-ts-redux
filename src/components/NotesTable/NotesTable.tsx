import { FC } from "react";
import { Note, Status, TableDataType, TableHeaderType } from "../../types/types";
import Table from "../Table";
import { NOTES_TABLE_STRING_HEADERS } from "../../constants/constants";
import { getLocalStringDate } from "./getLocalStringDate";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { deleteNote, editNote, handleArchive, switchTableView } from "../../store/reducers/noteSlice";
import ActionButtons from "./ActionButtons";
import { ArchiveIcon } from "./ActionIcons";

interface NotesTableProps {
    notes: Note[];
}

const NotesTable: FC<NotesTableProps> = ({ notes }) => {
    const tableView = useAppSelector((store) => store.notes.tableView);
    const dispatch = useAppDispatch();

    const preparedNotes: Note[] = notes.filter(
        (note) => note.status === (tableView === Status.ACTIVE ? Status.ACTIVE : Status.ARCHIVED),
    );

    const changeTableView = () => {
        dispatch(switchTableView());
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
                handleEdit={handleEdit}
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
        </>
    );
};

export default NotesTable;
