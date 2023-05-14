export const getTeamsSlice = state => state.teams;

export const getTeams = state => getTeamsSlice(state).teams;
export const getTeamsArray = state => Object.values(getTeams(state));
