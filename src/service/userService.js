import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/users",
});

//GET -user
export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

//POST -user
export const createUsers = async (userData) => {
  const res = await api.post("/users", userData);
  return res.data;
};
