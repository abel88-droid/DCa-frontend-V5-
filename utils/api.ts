// utils/api.ts
import axios from "axios";

const API_BASE_URL = "https://your-backend-url.com"; // Replace with your FastAPI backend URL

export const getWarnings = async () => {
  const res = await axios.get(`${API_BASE_URL}/warnings`);
  return res.data;
};

export const createWarning = async (warning: {
  user_id: string;
  guild_id: string;
  reason?: string;
}) => {
  const res = await axios.post(`${API_BASE_URL}/warnings`, warning);
  return res.data;
};

export const deleteWarning = async (id: number) => {
  const res = await axios.delete(`${API_BASE_URL}/warnings/${id}`);
  return res.data;
};

export const loginWithDiscord = () => {
  window.location.href = `${API_BASE_URL}/login`;
};
