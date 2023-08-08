import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import NotesPage from "../pages/NotesPage";

const meta = {
    component: NotesPage,
    title: "Notes/NotesPage",
    tags: ["autodocs"],
    decorators: [(Story) => <Provider store={store}>{Story()}</Provider>],
} satisfies Meta<typeof NotesPage>;
export default meta;

type Story = StoryObj<typeof meta>;

/** The primary view of the NotesPage component. Contains two tables: a table with notes and a table with data based on existing notes. Each table is updated as the data is updated. */
export const Primary: Story = {};
