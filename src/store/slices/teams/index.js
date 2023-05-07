import { createSlice } from '@reduxjs/toolkit';

import initialState from "./initialState"

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams(state, { payload }){
      Object.assign(state.teams, payload);
    },
    resetUsers(state) {
      state.teams = []
    }
  }
});

export default teamsSlice.reducer;
