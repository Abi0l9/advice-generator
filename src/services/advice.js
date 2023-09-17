import axios from "axios";
const baseUrl = "https://api.adviceslip.com";

export const getAdvice = async () => {
  const request = await axios.get(`${baseUrl}/advice`);
  return request.data;
};
