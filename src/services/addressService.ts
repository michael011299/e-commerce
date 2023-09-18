import axios from "axios";

const API_URL = "http://localhost:4040/address/";

export const getAddress = async (user_id: number) => {
  try {
    const response = await axios.get(`${API_URL}${user_id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting addresses:", error);
  }
};

export const createAddress = async (
  user_id: number,
  house_num: number,
  postcode: string,
  street_name: string,
  town: string
) => {
  try {
    const response = await axios.post(`${API_URL}newaddress`, {
      user_id: user_id,
      house_num: house_num,
      postcode: postcode,
      street_name: street_name,
      town: town,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating address", error);
  }
};

export const deleteAddress = async (address_id: number) => {
  console.log(address_id);
  try {
    const response = await axios.delete(`${API_URL}removeaddress`, {
      data: { address_id: address_id },
    });
    return response.data;
  } catch (error) {
    console.error("Error removing address", error);
  }
};

export const updateAddress = async (
  address_id: number,
  house_num: number,
  postcode: string,
  street_name: string,
  town: string
) => {
  try {
    const response = await axios.patch(`${API_URL}updateaddress`, {
      address_id: address_id,
      house_num: house_num,
      street_name: street_name,
      postcode: postcode,
      town: town,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating address", error);
  }
};
