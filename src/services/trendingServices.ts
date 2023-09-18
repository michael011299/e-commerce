import axios from "axios";

export const getTrendingProducts = async () => {
    try {
      const { data } = await axios.get(
        `https://api.bestbuy.com/beta/products/trendingViewed?apiKey=XoOyBvkKSwXerF6urgkvaO4p`
      );
      return data.results;
    } catch (err) {
      console.log(err);
    }
  };

  export const getPopularProducts = async () => {
    try {
      const { data } = await axios.get(`https://api.bestbuy.com/beta/products/mostViewed?apiKey=XoOyBvkKSwXerF6urgkvaO4p`      );
      return data.results;
    } catch (err) {
      console.log(err);
    }
  };