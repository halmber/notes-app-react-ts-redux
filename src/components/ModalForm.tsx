import { useState, useEffect } from "react";
import { CategoryType, Note, Status } from "../types/types";
import { getDatesFromContent } from "../shared/functions/getDatesFromContent";

interface ModalFormProps {
    title: string;
    onConfirm: (note: Note) => void;
    onClose: () => void;
    existingNote: Note | null;
}

const ModalForm: React.FC<ModalFormProps> = ({ title, onConfirm, onClose, existingNote }) => {
    const [name, setName] = useState<string>(existingNote?.name || "");
    const [category, setCategory] = useState<CategoryType>(existingNote?.category || "");
    const [content, setContent] = useState<string>(existingNote?.content || "");
    const [disabled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        setDisabled(!name || !category || !content);
    }, [name, category, content]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (existingNote) {
            onConfirm({ ...existingNote, name, category, content, dates: getDatesFromContent(content) });
        } else {
            onConfirm({
                name,
                category,
                content,
                created: new Date().getTime(),
                dates: getDatesFromContent(content),
                status: Status.ACTIVE,
            });
        }
        onClose();
    };

    return (
        <div className={`modal entering`}>
            <form className="modal-form" onSubmit={handleSubmit}>
                <h2 className="modal-title">{title}</h2>
                <div className="modal-inputs-container">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <select value={category} onChange={(e) => setCategory(e.target.value as CategoryType)}>
                        <option value="">Select category</option>
                        <option value="Task">Task</option>
                        <option value="Idea">Idea</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Plan">Plan</option>
                    </select>
                </div>
                <textarea placeholder="Content" rows={5} value={content} onChange={(e) => setContent(e.target.value)} />
                <div className="modal-btn-container">
                    <button type="submit" disabled={disabled} title={disabled ? "You must fill in all the fields" : ""}>
                        Submit
                    </button>
                    <button type="button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ModalForm;
