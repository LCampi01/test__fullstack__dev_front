import {call, takeLatest, put} from 'redux-saga/effects';

import {apiRoutes} from '@constants';
import {http} from '@services';

import {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure} from './sessionSlice';

export function* fetchUsers() {
  try {
    const users = yield call(http.get, apiRoutes.FAKE_API_DATA);
    yield put(fetchUsersSuccess({users}));
  } catch (err) {
    yield put(fetchUsersFailure());
  }
}

export default function* sessionSaga() {
  yield takeLatest(fetchUsersRequest, fetchUsers);
}
