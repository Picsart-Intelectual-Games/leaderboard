import { combineReducers } from '@reduxjs/toolkit';

import usersSlice from './slices/users';
import teamsSlice from './slices/teams';
import generalSlice from './slices/general';

const reducer = combineReducers({
  general: generalSlice.reducer,
  users: usersSlice.reducer,
  teams: teamsSlice.reducer,
});

export default reducer;
