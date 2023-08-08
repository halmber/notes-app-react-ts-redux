import { Meta, StoryObj } from "@storybook/react";
import ActionButtons from "../components/NotesTable/components/ActionButtons";
import { Status } from "../types/types";
import { action } from "@storybook/addon-actions";

/** The primary view of the ActionButtons component which use in the table cell. A component displays action buttons for a note. The ActionButtons allows you to interact with notes with edit, archive, and delete buttons, and can be used to display actions for each note in a convenient way. */
const meta = {
    component: ActionButtons,
    title: "Notes/ActionButtons",
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        note: { description: "The Note object for which the action buttons are displayed." },
        handleEdit: {
            description:
                "A function that is called when the edit button is clicked. It gets the note object for editing. Designed to open a modal window and transfer the selected Note to it.",
            action: "handleEdit",
        },
        handleClickArchive: {
            description:
                "The function that is called when the archive button is pressed. It gets the note id to archive or unarchive. Must change the status field in the Note object.",
            action: "handleClickArchive",
        },
        handleDelete: {
            description:
                "A function that is called when the delete button is pressed. It gets the note creation id and deletes Notes with this id.",
            action: "handleDelete",
        },
    },
} satisfies Meta<typeof ActionButtons>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        note: {
            created: new Date().getTime(),
            name: "Budget",
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
