import { TableDataType, TableHeaderType } from "../types/types";

interface TableProps {
    headers: TableHeaderType;
    data: TableDataType;
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} align="left">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((rowItem, indexRow) => (
                    <tr key={indexRow}>
                        {rowItem.map((dataItem, indexData) => (
                            <td key={indexData}>{dataItem}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
