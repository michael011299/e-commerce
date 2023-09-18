import axios from "axios";

export const getStores = async (city = "") => {
  try {
    const { data } = await axios.get(
      `https://api.bestbuy.com/v1/stores((city=${city}))?apiKey=XoOyBvkKSwXerF6urgkvaO4p&format=json`
    );
    return data.stores;
  } catch (err) {
    console.log(err);
  }
};
