import axios from "axios";

const api = {
  getUsers() {
    return axios.get("https://reqres.in/api/users?page=2");
  },
};

export default api;
