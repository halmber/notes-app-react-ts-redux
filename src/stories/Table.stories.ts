import type { Meta, StoryObj } from "@storybook/react";
import Table from "../components/Table";

const meta = {
    component: Table,
    title: "Notes/Table",
    tags: ["autodocs"],
    argTypes: {
        headers: {
            description: "Array of headers. Contains arrays of strings or JSX elements",
        },
        data: {
            description: "Array of data. Contains arrays of strings or JSX elements",
        },
    },
} satisfies Meta<typeof Table>;
export default meta;

type Story = StoryObj<typeof meta>;

const commonHeaders = ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5", "Header 6"];

/** The Table component is used to draw data in a convenient table form  */
export const Primary: Story = {
    args: {
        headers: commonHeaders,
        data: [["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5", "Cell 6"]],
    },
};

/** The empty Table component which displaying when there is no data  */
export const Empty: Story = {
    args: {
        headers: commonHeaders,
        data: [],
    },
};
