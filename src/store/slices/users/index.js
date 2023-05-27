import { createSlice } from '@reduxjs/toolkit';

import initialState from "./initialState"
import createUser from './utils/createUser';

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedUserId(state, { payload }) {
      state.selectedUserId = payload;
    },
    setUsers(state, { payload }) {
      state.users = payload;
    },
    setUserTeam(state, { payload }) {
      const { userId, teamId } = payload;
      state.users[userId].teamId = teamId;
    },
    updateUserName(state, { payload }) {
      const { id, name } = payload;
      state.users[id].name = name;
    },
    addUser(state, { payload }) {
      const newUser = createUser(payload);
      state.users[newUser.id] = newUser;
    }
  }
});

export default usersSlice;
