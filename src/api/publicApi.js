import axios from "axios";

const publicApi = () => {
  return axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL,
    headers: {
      "x-token": localStorage.getItem('token')
    }
  });
};

export default publicApi;
