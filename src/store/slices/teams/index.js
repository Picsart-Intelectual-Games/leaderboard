import { createSlice } from '@reduxjs/toolkit';

import initialState from "./initialState"

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams(state, { payload: team }) {
      state.teams[team.id] = team;
    },
    setTeamScore(state, { payload : { id, score } }) {
      state.teams[id].score = score;
    },
    resetTeams(state) {
      state.teams = []
    },
  }
});

export default teamsSlice;
