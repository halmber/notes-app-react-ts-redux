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
        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50 fixed left-0 top-0 entering">
            <form className="min-w-[25rem] w-[37.5rem] bg-white p-20 text-base rounded-md" onSubmit={handleSubmit}>
                <h2>{title}</h2>
                <div className="w-full flex justify-between">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <select value={category} onChange={(e) => setCategory(e.target.value as CategoryType)}>
                        <option value="">Select category</option>
                        <option value="Task">Task</option>
                        <option value="Idea">Idea</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Plan">Plan</option>
                    </select>
                </div>
                <textarea
                    className="w-full resize-none mt-2 overflow-auto"
                    placeholder="Content"
                    rows={5}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className="flex gap-2">
                    <button
                        className="bg-[#f0f0f0]"
                        type="submit"
                        disabled={disabled}
                        title={disabled ? "You must fill in all the fields" : ""}
                    >
                        Submit
                    </button>
                    <button className="bg-[#f0f0f0]" type="button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ModalForm;
