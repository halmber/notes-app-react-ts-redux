import { Note } from "../../types/types";
import { ArchiveIcon, DeleteIcon, EditIcon } from "./ActionIcons";

interface ActionButtonsProps {
    note: Note;
    handleEdit: (note: Note) => void;
    handleClickArchive: (id: number) => void;
    handleDelete: (id: number) => void;
}

const ActionButtons = ({ note, handleEdit, handleClickArchive, handleDelete }: ActionButtonsProps): JSX.Element => {
    return (
        <div className="action-cell">
            <EditIcon handleClick={() => handleEdit(note)} />
            <ArchiveIcon handleClick={() => handleClickArchive(note.created)} />
            <DeleteIcon handleClick={() => handleDelete(note.created)} />
        </div>
    );
};

export default ActionButtons;
