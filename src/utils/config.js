import axios from "axios";
const instance = axios.create({
  // baseURL: `http://127.0.0.1:8000/`,
  baseURL: `${import.meta.env.VITE_LOCAL_API}`,
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  transformRequest: [
    (data) => {
      return JSON.stringify(data);
    },
  ],
});
instance.interceptors.request.use((request) => {
  let cookie = localStorage.getItem("userInfo");
  if (cookie) {
    const user = JSON.parse(cookie);

    // console.log(user?.auth?.access_token);
    const token = user?.auth?.access_token;
    // console.log(import.meta.env.VITE_LOCAL_API);

    request.headers.Authorization = token ? `Bearer ${token}` : undefined;

    // instance.defaults.headers.common["Authorization"] =

    // console.log(request);
    return request;
  }

  return request;
});

const responseBody = (response) => response.data;

const error = (response) => {
  // console.log(response.response?.data?.message === "Unauthenticated.");
  if (response.response?.data?.message === "Unauthenticated.") {
    localStorage.removeItem("userInfo");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
  throw response;
};

const requests = {
  get: (url, body) => instance.get(url, body).then(responseBody, error),

  post: (url, body) => instance.post(url, body).then(responseBody, error),

  put: (url, body) => instance.put(url, body).then(responseBody, error),

  patch: (url, body) => instance.patch(url, body).then(responseBody, error),
};

export default requests;
