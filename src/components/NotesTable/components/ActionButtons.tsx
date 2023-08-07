import { Note } from "../../../types/types";
import { ArchiveIcon, DeleteIcon, EditIcon } from "./ActionIcons";

interface ActionButtonsProps {
    note: Note;
    handleEdit: (note: Note) => void;
    handleClickArchive: (id: number) => void;
    handleDelete: (id: number) => void;
}

const ActionButtons = ({ note, handleEdit, handleClickArchive, handleDelete }: ActionButtonsProps): JSX.Element => {
    return (
        <div className="flex items-center justify-end gap-2 action-cell [&>svg]:w-6 [&>svg]:fill-[#878787] hover:[&>svg]:fill-[#adadad]">
            <EditIcon handleClick={() => handleEdit(note)} />
            <ArchiveIcon handleClick={() => handleClickArchive(note.created)} />
            <DeleteIcon handleClick={() => handleDelete(note.created)} />
        </div>
    );
};

export default ActionButtons;
