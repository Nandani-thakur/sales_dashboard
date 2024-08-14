
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const SalesTable = ({ rowData }) => {
  const columnDefs = [
    { headerName: "Product", field: "product" },
    { headerName: "Category", field: "category" },
    { headerName: "Quantity Sold", field: "quantitySold" },
    { headerName: "Sales Amount", field: "salesAmount" }
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        sortable={true}
        filter={true}
      />
    </div>
  );
};
export default SalesTable;