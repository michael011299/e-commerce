import axios from "axios";

export const getBasket = async (user_id: number) => {
  try {
    const response = await axios.get(
      `http://localhost:4040/baskets/${user_id}`
    );
    return response.data[0].products;
  } catch (error) {
    console.error("Error getting basket:", error);
  }
};

export const addToBasket = async (
  product: { productData: any },
  user_id: number
) => {
  try {
    const productToSend = product.productData;
    const response = await axios.post(`http://localhost:4040/baskets/additem`, {
      productToSend,
      user_id,
    });
    return response;
  } catch (error) {
    console.error("Error adding to basket:", error);
  }
};

export const createBasket = async (user_id: number) => {
  try {
    const response = await axios.post(
      `http://localhost:4040/baskets/newbasket`,
      { user_id }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating basket:", error);
  }
};

export const removeItem = async (
  user_id: number,
  product: { productData: any }
) => {
  try {
    const response = await axios.delete(
      `http://localhost:4040/baskets/removeitem`,
      {
        data: { user_id: user_id, product: product },
      }
    );
    return response;
  } catch (error) {
    console.error("Error removing from basket:" + error);
  }
};

export const clearBasket = async (user_id: number) => {
  try {
    const response = await axios.delete(
      `http://localhost:4040/baskets/clearbasket/${user_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
