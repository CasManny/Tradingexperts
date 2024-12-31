import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:6500",
});

// Add a request interceptor to set the Authorization header dynamically
api.interceptors.request.use((config) => {
  const userToken = localStorage.getItem("userToken");
  const adminToken = localStorage.getItem("adminToken");

  // Check the route and decide which token to use
  if (config.url?.startsWith("/admin")) {
    config.headers["Authorization"] = `Bearer ${adminToken}`;
  } else {
    config.headers["Authorization"] = `Bearer ${userToken}`;
  }

  return config;
});

export default api;
