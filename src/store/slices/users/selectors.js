export const getUsersSlice = state => state.users;

export const getSelectedUserId = state => getUsersSlice(state).getSelectedUserId;
export const getUsers = state => getUsersSlice(state).users;
