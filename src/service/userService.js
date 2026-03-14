import axios from "axios";

//GET -user
export const getUsers = async () => {
  const res = await axios.get("https://fakestoreapi.com/users");
  return res.data;
};

//POST -user
export const createUsers = async (userData) => {
  const res = await axios.post("https://fakestoreapi.com/users", userData);
  return res.data;
};
