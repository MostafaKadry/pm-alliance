import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false, // Initially, we are not loading
    reducers: {
        setLoading: (state, action) => action.payload, // The action payload will be either true (loading) or false (not loading)
    },
});

// Export the action creator
export const { setLoading } = loadingSlice.actions;
// Export the reducer
export default loadingSlice.reducer;
