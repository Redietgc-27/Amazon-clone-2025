import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000",

// });
const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-fhu3.onrender.com/",
});
export { axiosInstance };
