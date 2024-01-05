import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
const APP_ID = process.env.NEXT_PUBLIC_APP_ID;

const config = {
  headers: { "app-id": APP_ID },
};

export const getPosts = async () => {
  return await axios.get(`${API_URL}/post`, config);
};

export const getPostById = async (postId) => {
  return await axios.get(`${API_URL}/post/${postId}`, config);
};

export const createPost = async (postData) => {
  return await axios.post(`${API_URL}/post/create`, postData, config);
};

export const updatePost = async (postId, postData) => {
  return await axios.put(`${API_URL}/post/${postId}`, postData, config);
};

export const deletePost = async (postId) => {
  return await axios.delete(`${API_URL}/post/${postId}`, config);
};
