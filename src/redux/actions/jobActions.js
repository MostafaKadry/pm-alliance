import { setJobs } from '../reducers/jobReducer';
import { fetchFilteredJobs, categoryFilteredJobs } from '../../assets/database/filteredJobs';
import { fetchRandomJobs } from '../../assets/database/randomJobs';
import { fetchFeaturedJobs } from '../../assets/database/featuredJobs';

import { setLoading } from '../reducers/loadingReducer';
export const fetchJobs = (query) => async (dispatch) => {
    // Set loading to true
    dispatch(setLoading(true));
    try {
        const jobs = await fetchFilteredJobs(query); // fetchFilteredJobs already returns response.data
        console.log(jobs); // For debugging
        dispatch(setJobs(jobs)); // Using the action created by createSlice
    } catch (error) {
        console.error("Error fetching jobs:", error);
    } finally {
        // Set loading to false after fetching is done
        dispatch(setLoading(false));
    }
};
export const RandomJobsAction = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const jobs = await fetchRandomJobs(); // fetchFilteredJobs already returns response.data
        console.log(jobs); // For debugging
        dispatch(setJobs(jobs)); // Using the action created by createSlice
    } catch (error) {
        console.error("Error fetching jobs:", error);
    } finally {
        // Set loading to false after fetching is done
        dispatch(setLoading(false));
    }
}

export const fetchFeaturedJobsAction = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const featuredJobs = await fetchFeaturedJobs(); // Fetch the featured jobs from your API
        dispatch(setJobs(featuredJobs)); // Dispatch the jobs to Redux
    } catch (error) {
        console.error('Error fetching featured jobs:', error);
    } finally {
        dispatch(setLoading(false));
    }
};
export const categoryFilteredJobsAction = (query) => async (dispatch) => {
    // Set loading to true
    dispatch(setLoading(true));
    try {
        const jobs = await categoryFilteredJobs(query);
        console.log(jobs); // For debugging
        dispatch(setJobs(jobs)); // Using the action created by createSlice
    } catch (error) {
        console.error("Error fetching jobs:", error);
    } finally {
        // Set loading to false after fetching is done
        dispatch(setLoading(false));
    }
};