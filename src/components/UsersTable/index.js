import PropTypes from 'prop-types';
import {DataGrid} from '@mui/x-data-grid';

function UsersTable({rows, columns, fetchingUsers}) {
  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        disableColumnMenu
        rows={rows}
        columns={columns}
        loading={fetchingUsers}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[]}
      />
    </div>
  );
}

UsersTable.propTypes = {
  rows: PropTypes.arrayOf({}).isRequired,
  columns: PropTypes.arrayOf({}).isRequired
};

export default UsersTable;
