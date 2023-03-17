import {connect} from 'react-redux';

import {fetchUsersRequest} from '@state/session/sessionSlice';

import {getUsers} from '@state/session/selectors';

import Home from './Home';

const mapStateToProps = props => ({
  users: getUsers(props)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsersRequest())
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
