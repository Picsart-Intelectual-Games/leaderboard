export const getGeneralSlice = state => state.general;

export const getQuestionsCount = state => getGeneralSlice(state).questionsCount;
