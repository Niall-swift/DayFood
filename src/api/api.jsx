import axios from "axios";
import { parseCookies } from 'nookies';

const UseAPIClient = (ctx) => {
    let cookies = parseCookies(ctx);


    const api = axios.create({
        baseURL:'http://localhost:3000/',
        headers: {
            Authorization: `Bearer ${cookies['@dayfood.token']}`
        }
    });

    api.interceptors.response.use(
        response => response,
        error => {
            if (error.response.status === 401) {
                // Handle 401 error by logging out the user
                if (typeof window !== 'undefined') {
                    // For client-side
                    // Redirect or perform logout action
                } else {
                    // For server-side
                    return Promise.reject('Auth token error');
                }
            }
            return Promise.reject(error);
        }
    );

    return api;
};

export default UseAPIClient;
