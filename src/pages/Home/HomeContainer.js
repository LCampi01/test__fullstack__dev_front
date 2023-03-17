import {connect} from 'react-redux';

import {fetchUsersRequest} from '@state/session/sessionSlice';

import {getUsers, fetchingUsers, getColumns} from '@state/session/selectors';

import Home from './Home';

const mapStateToProps = props => ({
  users: getUsers(props),
  fetchingUsers: fetchingUsers(props),
  columns: getColumns()
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: (filters = {}) => dispatch(fetchUsersRequest(filters))
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
