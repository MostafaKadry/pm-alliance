import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './reducers/jobReducer';
import loadingReducer from './reducers/loadingReducer';
import userReducer from './reducers/userReducer';
const store = configureStore({
    reducer: {
        jobs: jobReducer,
        user: userReducer,
        loading: loadingReducer,
    },
});

export default store;
