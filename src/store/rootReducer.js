import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './slices/users';
import teamsReducer from './slices/teams';

const reducer = combineReducers({
  users: usersReducer,
  teams: teamsReducer,
});

export default reducer;
