export enum Status {
    ACTIVE = "ACTIVE",
    ARCHIVED = "ARCHIVED",
}

export type Category = "Idea" | "Task" | "Plan" | "Random Thought";

export interface Note {
    name: string;
    created: number;
    category: Category;
    content: string;
    dates: string[];
    status: Status.ACTIVE | Status.ARCHIVED;
}

export interface StateOfNotes {
    notes: Note[];
    tableView: Status.ACTIVE | Status.ARCHIVED;
}
