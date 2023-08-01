import { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import NotesTable from "../components/NotesTable/NotesTable";
import { Status } from "../types/types";

const NotesPage: FC = () => {
    const { notes, tableView } = useAppSelector((store) => store.notes);

    return (
        <div className="notes-container">
            <div className="action-panel">
                <h2>{tableView === Status.ARCHIVED ? "Archived notes" : ""}</h2>
                <button>Add note</button>
            </div>
            <NotesTable notes={notes} />
        </div>
    );
};

export default NotesPage;
