import axios from "axios";
// prod url
let baseUrl = "https://chi-artist-atlas-backend.herokuapp.com";
let host = window.location.host;
if (host == "localhost:8080" || host == "localhost:8081" || host == "localhost:8082") {
  baseUrl = "http://localhost:3000";
}

let api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
