
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const ComparisonTable = ({ rowData }) => {
  const columnDefs = [
    { headerName: 'Product Name', field: 'product', sortable: true, filter: true },
    { headerName: 'Category', field: 'category', sortable: true, filter: true },
    { headerName: 'Date 1 Sales Amount', field: 'date1SalesAmount', sortable: true, filter: true },
    { headerName: 'Date 2 Sales Amount', field: 'date2SalesAmount', sortable: true, filter: true },
    { headerName: 'Difference', field: 'difference', sortable: true, filter: true },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={10}
        domLayout='autoHeight'
      />
    </div>
  );
};

export default ComparisonTable;
