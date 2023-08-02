import { CategoryType, Note, Status } from "../../types/types";

export const getCountOfCategory = (
    notes: Note[],
    category: CategoryType,
    status: Status.ACTIVE | Status.ARCHIVED,
): number => {
    const count = notes.reduce((accumulator, current) => {
        if (current.category === category && current.status === status) {
            return accumulator + 1;
        } else {
            return accumulator;
        }
    }, 0);
    return count;
};
