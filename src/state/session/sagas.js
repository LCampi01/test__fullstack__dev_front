import {call, takeLatest, put} from 'redux-saga/effects';

import {apiRoutes} from '@constants';
import {http} from '@services';

import {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure} from './sessionSlice';

import isEmpty from 'lodash/isEmpty';

export function* fetchUsers({payload}) {
  try {
    let query = '?';
    if(!isEmpty(payload)) {
        const filters = Object.fromEntries(Object.entries(payload).filter(([_, v]) => v != ''));
        query += new URLSearchParams(filters).toString();
    }
    const {users} = yield call(http.get, `${apiRoutes.GET_USERS}${query}`);
    yield put(fetchUsersSuccess({users}));
  } catch (err) {
    yield put(fetchUsersFailure());
  }
}

export default function* sessionSaga() {
  yield takeLatest(fetchUsersRequest, fetchUsers);
}
