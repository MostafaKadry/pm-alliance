import img from "./fulllogo_transparent_nobuffer 4.png";
import axios from 'axios';
export const fetchRandomJobs = async () => {
    const results_per_page = 12;
    try {
        const response = await axios.get(`https://jobs-platform-back-end.vercel.app/api/jobs/?results_per_page=${results_per_page}`);

        // Create a new array with the img property added to each job
        const jobsWithImage = response.data.map(job => ({ ...job, img }));
        return jobsWithImage;
    } catch (error) {
        console.log(error)
    }
}
