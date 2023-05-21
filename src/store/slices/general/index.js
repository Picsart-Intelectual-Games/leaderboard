import { createSlice } from '@reduxjs/toolkit';

import initialState from "./initialState"

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setQuestionsCount(state, { payload }) {
      state.questionsCount = payload;
    },
  }
});

export default generalSlice;
