import { configureStore } from '@reduxjs/toolkit';
import { contactsApi, filterContacts } from './materialsSlice';

export const store = configureStore({
  reducer: {
    [contactsApi]: contactsApi.reducer,
    [filterContacts]: filterContacts.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});
