import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { initialNotes } from "../initialData/initialNotesData";
import SummaryTable from "../components/SummaryTable/SummaryTable";

const meta = {
    component: SummaryTable,
    title: "Notes/SummaryTable",
    tags: ["autodocs"],
    decorators: [(Story) => <Provider store={store}>{Story()}</Provider>],
    argTypes: {
        notes: {
            control: "object",
            description: "An array of notes for calculating the count of archived and active notes.",
        },
    },
} satisfies Meta<typeof SummaryTable>;
export default meta;

type Story = StoryObj<typeof meta>;

/** The primary view of the SummaryTable component. Counts the number of active and archived notes by category based on the notes prop. */
export const Primary: Story = {
    args: { notes: initialNotes },
};
