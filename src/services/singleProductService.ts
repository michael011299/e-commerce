import axios from "axios";

export const getSingleProduct = async (productID: string | undefined) => {
  try {
    const response = await axios.get(
      `https://api.bestbuy.com/v1/products(sku=${productID})?apiKey=XoOyBvkKSwXerF6urgkvaO4p&sort=color.asc&show=color,condition,customerReviewAverage,categoryPath.name,customerReviewCount,description,freeShipping,image,includedItemList.includedItem,frequentlyPurchasedWith.sku,features.feature,dollarSavings,manufacturer,name,onlineAvailabilityText,regularPrice,salePrice,sku,shippingCost,shortDescription,longDescription,categoryPath&format=json`
    );
    return response.data.products;
  } catch (err) {
    console.log(err);
  }
};

export const getSingleProductFetch = async (productID: string | undefined) => {
  try {
    const response = await fetch(
      `https://api.bestbuy.com/v1/products(sku=${productID})?apiKey=XoOyBvkKSwXerF6urgkvaO4p&sort=color.asc&show=color,condition,customerReviewAverage,categoryPath.name,customerReviewCount,description,freeShipping,image,includedItemList.includedItem,frequentlyPurchasedWith.sku,features.feature,dollarSavings,manufacturer,name,onlineAvailabilityText,regularPrice,salePrice,sku,shippingCost,shortDescription,longDescription,categoryPath&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.products;
      });
    return response;
  } catch (err) {
    console.log(err);
  }
};
