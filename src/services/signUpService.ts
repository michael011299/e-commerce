import axios from "axios";

const API_URL = "http://localhost:4040/users/";

export const createUser = async (user: {
  email: any;
  username: any;
  password: any;
}) => {
  const { email, username, password } = user;
  try {
    const response = await axios.post(`${API_URL}newuser`, {
      email,
      username,
      password,
    });
    return response;
  } catch (error) {
    console.error("Error creating user:" + error);
  }
};

export const getUser = async (username: string) => {
  try {
    const response = await axios.get(`${API_URL}${username}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (
  user_id: number,
  username: string,
  password: string
) => {
  try {
    const response = await axios.patch(`${API_URL}updateuser`, {
      user_id,
      username,
      password,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
