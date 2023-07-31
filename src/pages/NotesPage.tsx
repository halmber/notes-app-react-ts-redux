import { FC } from "react";
import { useAppSelector } from "../hooks/redux";

const NotesPage: FC = () => {
    const { notes } = useAppSelector((store) => store.notes);
    console.log(notes);

    return <div className="notes-container">Notes Page</div>;
};

export default NotesPage;
