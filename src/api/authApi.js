import axios from "axios";

const authApi = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_AUTH_API_BASE_URL,
  });
};

export default authApi;
