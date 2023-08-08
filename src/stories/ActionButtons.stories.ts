import { Meta, StoryObj } from "@storybook/react";
import ActionButtons from "../components/NotesTable/components/ActionButtons";
import { Status } from "../types/types";
import { action } from "@storybook/addon-actions";

const meta = {
    component: ActionButtons,
    title: "Notes/ActionButtons",
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        note: { description: "Note object which use in whole project" },
        handleEdit: {
            description: "A function that changes the fields of a Note object. You can use it to edit your notes.",
            action: "handleEdit",
        },
        handleClickArchive: {
            description: "A function that changes the status field in the Note object. Archives or unarchives a note.",
            action: "handleClickArchive",
        },
        handleDelete: {
            description:
                "A function that returns an object from an array of all notes. Implements the function of deleting a note.",
            action: "handleDelete",
        },
    },
} satisfies Meta<typeof ActionButtons>;
export default meta;

type Story = StoryObj<typeof meta>;

/** The primary view of the ActionButtons component which use in the table cell  */
export const Primary: Story = {
    args: {
        note: {
            created: new Date().getTime(),
            name: "Git",
            category: "Idea",
            content: "Review monthly expenses and create a budget for the next month by 31.07.23",
            dates: ["31.07.23"],
            status: Status.ACTIVE,
        },
        handleEdit: action("handleClickEdit"),
        handleClickArchive: action("handleClickArchive"),
        handleDelete: action("handleDelete"),
    },
};
