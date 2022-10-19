import axios from "axios";

const publicApi = () => {
  return axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL,
  });
};

export default publicApi;
