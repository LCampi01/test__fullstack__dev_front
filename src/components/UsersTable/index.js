import PropTypes from 'prop-types';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
  {
    field: 'id', headerName: 'ID', width: 10, sortable: false
  },
  {field: 'name', headerName: 'Name', width: 145},
  {field: 'username', headerName: 'Username', width: 140},
  {field: 'email', headerName: 'Email', width: 145},
  {
    field: 'street', headerName: 'Street', width: 145, sortable: false
  },
  {
    field: 'suite', headerName: 'Suite', width: 90, sortable: false
  },
  {
    field: 'city', headerName: 'City', width: 145, sortable: false
  },
  {
    field: 'zipcode', headerName: 'Zipcode', width: 100, sortable: false
  },
  {
    field: 'phone', headerName: 'Phone', width: 180, sortable: false
  },
  {
    field: 'website', headerName: 'Website', width: 110, sortable: false
  },
  {
    field: 'company', headerName: 'Company', width: 145, sortable: false
  }
];

function UsersTable({rows}) {
  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        disableColumnMenu
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
}

UsersTable.propTypes = {
  rows: PropTypes.arrayOf({}).isRequired
};

export default UsersTable;
