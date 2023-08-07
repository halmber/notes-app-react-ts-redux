import { TableDataType, TableHeaderType } from "../types/types";

interface TableProps {
    headers: TableHeaderType;
    data: TableDataType;
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
    const renderTableRows = () => {
        if (data.length === 0) {
            return (
                <tr>
                    <td className="text-center" colSpan={headers.length}>
                        <p className="text-gray-400">No data yet</p>
                    </td>
                </tr>
            );
        }

        return data.map((rowItem, indexRow) => (
            <tr key={indexRow}>
                {rowItem.map((dataItem, indexData) => (
                    <td className="bg-[#e8eaf5] p-2.5 first:rounded-l-md last:rounded-r-md" key={indexData}>
                        {dataItem}
                    </td>
                ))}
            </tr>
        ));
    };

    return (
        <table className="w-full text-white text-base border-separate border-spacing-y-4">
            <thead className="bg-[#999999]">
                <tr>
                    {headers.map((header, index) => (
                        <th className="p-2.5 first:rounded-l-md last:rounded-r-md" key={index} align="left">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="text-black">{renderTableRows()}</tbody>
        </table>
    );
};

export default Table;
