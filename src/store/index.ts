import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import personReducer from './person'

const reducer = combineReducers({
    person: personReducer
});

const store = configureStore({ reducer });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
