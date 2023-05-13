import { combineReducers } from '@reduxjs/toolkit';

import usersSlice from './slices/users';
import teamsSlice from './slices/teams';

const reducer = combineReducers({
  users: usersSlice.reducer,
  teams: teamsSlice.reducer,
});

export default reducer;
