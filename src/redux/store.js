import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './reducers/jobReducer';
import loadingReducer from './reducers/loadingReducer';

const store = configureStore({
    reducer: {
        jobs: jobReducer,
        loading: loadingReducer,
    },
});

export default store;
