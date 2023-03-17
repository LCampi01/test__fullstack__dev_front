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
