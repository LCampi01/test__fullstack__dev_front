import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: null,
  fetchingUsers: false,
  hasError: false
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    fetchUsersRequest: state => { state.fetchingUsers = true; state.hasError = false; },
    fetchUsersSuccess: (state, action) => {
      const {users} = action.payload;
      state.fetchingUsers = false;
      state.users = users;
      state.hasError = false;
    },
    fetchUsersFailure: state => {
      state.fetchingUsers = false;
      state.hasError = true;
    }
  }
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure
} = sessionSlice.actions;

export default sessionSlice.reducer;
