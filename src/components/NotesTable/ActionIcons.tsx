import { FC } from "react";

interface IconsProps {
    handleClick: () => void;
}

export const EditIcon: FC<IconsProps> = ({ handleClick }) => {
    return (
        <svg onClick={handleClick} focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
        </svg>
    );
};

export const ArchiveIcon: FC<IconsProps> = ({ handleClick }) => {
    return (
        <svg onClick={handleClick} className="archive-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <path d="m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5 6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path>
        </svg>
    );
};

export const DeleteIcon: FC<IconsProps> = ({ handleClick }) => {
    return (
        <svg onClick={handleClick} focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
    );
};
