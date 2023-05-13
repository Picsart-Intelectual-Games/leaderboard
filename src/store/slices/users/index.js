import { createSlice } from '@reduxjs/toolkit';

import initialState from "./initialState"

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedUserId(state, { payload }) {
      state.selectedUserId = payload;
    },
    setUsers(state, { payload }) {
      Object.assign(state.users, payload);
    },
    setUserTeam(state, { payload }) {
      const { userId, teamId } = payload;
      state.users[userId].teamId = teamId;
    }
  }
});

export default usersSlice;
