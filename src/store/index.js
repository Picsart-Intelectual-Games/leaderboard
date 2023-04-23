import { configureStore } from '@reduxjs/toolkit';

import reducer from './rootReducer';

const store = configureStore({
  reducer,
  devTools: { trace: true, traceLimit: 15 },
  middleware: (getDefaultMiddleware) => [ ...getDefaultMiddleware(), () => console.log('test middleware')],
});

export default store;
