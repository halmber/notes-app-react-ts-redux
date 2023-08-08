import { Meta, StoryObj } from "@storybook/react";
import { Status } from "../types/types";
import ModalForm from "../components/ModalForm";
import { action } from "@storybook/addon-actions";

/** A component that provides the ability to create and edit notes in a convenient modal form. It receives inputs such as the name, category, and content of the note, as well as functions to confirm or cancel the action. The display function of the modal form must be implemented in the place where the component is used to ensure proper interaction with the user and display the required information. */
const meta = {
    component: ModalForm,
    title: "Notes/ModalForm",
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: "text",
            description:
                "A modal window title that indicates whether you are creating a new note or editing an existing one. It is possible to reuse components thanks to this props",
        },
        onConfirm: {
            action: "onConfirm",
            description:
                "A function that is called when confirming the creation of a new note or saving changes to an existing note. A newly created object of the Note type, or a new object with changed fields in it, is transferred to it.",
        },
        onClose: {
            action: "onClose",
            description:
                "A function that is called when an action is canceled or a modal window is closed. It is better to use a simple change to the boolean variable that renders the component to close the window",
        },
        existingNote: {
            control: "null",
            description:
                "An object of an existing note to edit. If this object is passed, then the modal window is displayed in edit mode with the corresponding field values.",
        },
    },
} satisfies Meta<typeof ModalForm>;
export default meta;

type Story = StoryObj<typeof meta>;

/** This story displays the ModalForm component in the mode of creating a new note. You can enter a title, select a category, and enter the content of the new note. The "Submit" button is activated when all fields are filled in, and you can click on it to confirm the creation of the note. The "Cancel" button cancels the action and closes the modal window. */
export const AddNote: Story = {
    args: {
        title: "Add Note",
        onConfirm: action("onConfirm"),
        onClose: action("onClose"),
        existingNote: null,
    },
};

/** This story displays a ModalForm component in edit mode on an existing note. An editable note is passed through the existingNote property, where you can see the note's details, such as title, category, and content. You can make changes to any information and click "Submit" to save changes or "Cancel" to exit without saving changes. */
export const EditNote: Story = {
    args: {
        title: "Edit Note",
        onConfirm: action("onConfirm"),
        onClose: action("onClose"),
        existingNote: {
            name: "Budget",
            category: "Idea",
            content: "Review monthly expenses and create a budget for the next month by 31.07.23",
            created: new Date().getTime(),
            dates: ["31.07.23"],
            status: Status.ACTIVE,
        },
    },
};
