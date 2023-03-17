import get from 'lodash/get';
import map from 'lodash/map';

const createData = (
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company
) => ({
  id,
  name,
  username,
  email,
  street: get(address, 'street'),
  suite: get(address, 'suite'),
  city: get(address, 'city'),
  zipcode: get(address, 'zipcode'),
  phone,
  website,
  company: get(company, 'name')
});

const createRows = (users) => map(users, (user) => createData(
  user.id,
  user.name,
  user.username,
  user.email,
  user.address,
  user.phone,
  user.website,
  user.company
));

export const getUsers = (state) => createRows(get(state, 'session.users'));
export const fetchingUsers = state => get(state, 'session.fetchingUsers');
export const getColumns = () => [
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