import { NOTES_CATEGORIES, SUMMARY_TABLE_HEADERS } from "../../constants/constants";
import { Note, Status, TableDataType } from "../../types/types";
import Table from "../Table";
import { getCountOfCategory } from "./getCountOfCategory";

interface SummaryTableProps {
    notes: Note[];
}

const SummaryTable: React.FC<SummaryTableProps> = ({ notes }) => {
    const notesTableData: TableDataType = NOTES_CATEGORIES.map((category) => {
        return [
            category,
            String(getCountOfCategory(notes, category, Status.ACTIVE)),
            String(getCountOfCategory(notes, category, Status.ARCHIVED)),
        ];
    });

    return (
        <>
            <h2>Summary</h2>
            <Table headers={SUMMARY_TABLE_HEADERS} data={notesTableData} />
        </>
    );
};

export default SummaryTable;
