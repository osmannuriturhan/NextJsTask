import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
const config = {
  headers: { "app-id": APP_ID },
};

export const getUsers = async () => {
  return await axios.get(`${API_URL}/user`, config);
};

export const getUserById = async (userId) => {
  return await axios.get(`${API_URL}/user/${userId}`, config);
};

export const createUser = async (userData) => {
  return await axios.post(`${API_URL}/user/create`, userData, config);
};

export const updateUser = async (userId, userData) => {
  return await axios.put(`${API_URL}/user/${userId}`, userData, config);
};

export const deleteUser = async (userId) => {
  return await axios.delete(`${API_URL}/user/${userId}`, config);
};
