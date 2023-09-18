import axios from "axios";

const API_URL = "http://localhost:4040/orders/";

export const newOrder = async (
  user_id: number,
  order_id: string,
  basketString: string,
  totalPrice: number,
  date: string,
  address: string
) => {
  try {
    const response = await axios.post(`${API_URL}neworder`, {
      user_id,
      order_id,
      basketString,
      totalPrice,
      date,
      address
    });
    return response.data;
  } catch (error) {
    console.error("Error creating order: " + error);
  }
};

export const getOrders = async (user_id: number) => {

  try {
    const response = await axios.get(`${API_URL}${user_id}`);
    return response.data;
  } catch (error) {
    console.error("error getting orders" + error);
  }
};
