import { createSlice } from '@reduxjs/toolkit';

import initialState from "./initialState"

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams(state, { payload: team }) {
      state.teams[team.id] = team;
    },
    resetTeams(state) {
      state.teams = []
    },
  }
});

export default teamsSlice;
