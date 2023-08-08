import type { Meta, StoryObj } from "@storybook/react";
import NotesTable from "../components/NotesTable/NotesTable";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { initialNotes } from "../initialData/initialNotesData";

const meta = {
    component: NotesTable,
    title: "Notes/NotesTable",
    tags: ["autodocs"],
    decorators: [(Story) => <Provider store={store}>{Story()}</Provider>],
    argTypes: { notes: { control: "object", description: "An array of notes to be displayed in the table." } },
} satisfies Meta<typeof NotesTable>;
export default meta;

type Story = StoryObj<typeof meta>;

/** The primary view of the NotesTable component. Contains data that comes through props. The data itself can be in the form of strings or JSX.Element, such as in the form of buttons that allows you to interact with notes. */
export const Primary: Story = {
    args: { notes: initialNotes },
};
