import type { Meta, StoryObj } from "@storybook/react";
import Table from "../components/Table";

const meta = {
    component: Table,
    title: "Notes/Table",
    tags: ["autodocs"],
    argTypes: {
        headers: {
            description: "Array of headers. Can contain arrays of strings or JSX elements",
            control: { type: "array" },
        },
        data: {
            description: "Array of data. Can contain arrays of strings or JSX elements",
            control: { type: "array" },
        },
    },
} satisfies Meta<typeof Table>;
export default meta;

type Story = StoryObj<typeof meta>;

/** The component is used to draw data in a convenient table form  */
export const Primary: Story = {
    args: {
        headers: ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5", "Header 6"],
        data: [["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5", "Cell 6"]],
    },
};
