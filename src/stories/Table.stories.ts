import type { Meta, StoryObj } from "@storybook/react";
import Table from "../components/Table";

/** A component that displays data in a table format with different headers and rows. */
const meta = {
    component: Table,
    title: "Notes/Table",
    tags: ["autodocs"],
    argTypes: {
        headers: {
            description:
                "An array that contains the headers for each column of the table in the form of a string. May contain a JSX element in the form of a button.",
        },
        data: {
            description:
                "An array of arrays that contains the data for each row of the table in the form of a string. May contain a JSX element in the form of a buttons.",
        },
    },
} satisfies Meta<typeof Table>;
export default meta;

type Story = StoryObj<typeof meta>;

const commonHeaders = ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5", "Header 6"];

/** A variation to display a table with data. Uses the headers and data array passed to it to create a table.  */
export const Primary: Story = {
    args: {
        headers: commonHeaders,
        data: [["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5", "Cell 6"]],
    },
};

/** A variation to display an empty table. It also uses the headers passed into it, but the data array is empty.  */
export const Empty: Story = {
    args: {
        headers: commonHeaders,
        data: [],
    },
};
