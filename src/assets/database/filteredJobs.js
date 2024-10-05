
import img from "./fulllogo_transparent_nobuffer 4.png";
import axios from 'axios';

export const fetchFilteredJobs = async (query) => {
    console.log(query)
    try {
        // queries must be like : { results_per_page, keyword, title, location, company, salary, pageNo }
        // at least keyword and location must me entered.
        const response = await axios.get(`http://localhost:5000/api/jobs/filter?${query}`);
        console.log(response.data);
        // Create a new array with the img property added to each job
        const jobsWithImage = response?.data.map(job => ({ ...job, img }));
        return jobsWithImage;
    } catch (error) {
        console.log(error);
        console.error("Error fetching jobs:", error.response.data.message);
        window.alert(error.response.data.message);
        return;
    }
}
export const categoryFilteredJobs = async (query) => {
    const serializedQuery = query;
    try {
        // queries must be like : { results_per_page, keyword, title, location, company, salary, pageNo }
        // at least keyword and location must me entered.
        const response = await axios.get('https://jobs-platform-back-end.vercel.app/api/jobs/category', {
            params: serializedQuery // Axios will automatically format the query string correctly
        });
        console.log(response.data);
        // Create a new array with the img property added to each job
        const jobsWithImage = response.data.map(job => ({ ...job, img }));
        return jobsWithImage;
    } catch (error) {
        console.log(error);
    }
}

