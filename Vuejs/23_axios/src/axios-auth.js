import axios from "axios";

const instance = axios.create({
  baseURL: "https://vue-backend-48df1-default-rtdb.firebaseio.com/",
});

instance.defaults.headers.common["SOMETHING"] = "something";

export default instance;
