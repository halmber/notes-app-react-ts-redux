export enum Status {
    ACTIVE = "ACTIVE",
    ARCHIVED = "ARCHIVED",
}

export type CategoryType = "Idea" | "Task" | "Plan" | "Random Thought" | "";

export interface Note {
    name: string;
    created: number;
    category: CategoryType;
    content: string;
    dates: string[];
    status: Status.ACTIVE | Status.ARCHIVED;
}

export interface StateOfNotes {
    notes: Note[];
    tableView: Status.ACTIVE | Status.ARCHIVED;
}

export type TableDataType = Array<string | JSX.Element>[];
export type TableHeaderType = Array<string | JSX.Element>;
