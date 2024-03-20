import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../../mockData/mockData';

type RowData = {
  cost: string;
  // other properties...
};

const PaidHistoryRoom: React.FC = () => {
  const columns = [
    { field: 'id', headerName: 'Id' },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      cellClassName: 'name-column--cell',
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone Number', width: 100 },

    {
      field: 'cost',
      headerName: 'Cost',
      width: 100,
      renderCell: ({ row }: { row: RowData }) => {
        return <Typography color=''>${row.cost}</Typography>;
      },
    },
    { field: 'date', headerName: 'Date', width: 100 },
  ];
  return (
    <div className='w-full relative mx-auto py-1 md:px-2 rounded-lg h-full box-border'>
      <div className='relative w-full px-5 flex items-center justify-between bg-foreground rounded-lg shadow-md mt-4 h-[95%]'>
        <Box sx={{display: 'flex', width: "100%", height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Box
            m='8px 0 0 0'
            height='80vh'
            sx={{
              '& .MuiDataGrid-root': {
                border: 'none',
              },
              '& .MuiDataGrid-cell': {
                borderBottom: 'none',
              },
              '& .name-column--cell': {
                color: '#94e2cd',
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#232333',
                borderBottom: 'none',
              },
              '& .MuiDataGrid-virtualScroller': {
                backgroundColor: '#2b2c40',
              },
              '& .MuiDataGrid-footerContainer': {
                borderTop: 'none',
                backgroundColor: '#2b2c40',
              },
              '& .MuiCheckbox-root': {
                color: `${'#b7ebde'} !important`,
              },
              '& .MuiChackbox-root': {
                color: `${'#b7ebde'} !important`,
              },
            }}>
            <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default PaidHistoryRoom;
