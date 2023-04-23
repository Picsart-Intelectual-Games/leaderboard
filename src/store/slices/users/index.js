import { createSlice } from '@reduxjs/toolkit';

import initialState from "./initialState"

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedUserId(state, { payload }){
      state.selectedUserId = payload;
    },
    setUsers(state, { payload }) {
      Object.assign(state.users, payload);
    }
  }
});

export default usersSlice.reducer;
