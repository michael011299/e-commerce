import axios from "axios";

export const getBrand = async (
  brand: any,
  currentPage: any,
  pageSize: any,
  sort: any,
  order: any
) => {
  try {
    const { data } = await axios.get(
      `https://api.bestbuy.com/v1/products(manufacturer=${brand})?apiKey=XoOyBvkKSwXerF6urgkvaO4p&sort=manufacturer.asc&show=categoryPath.name,color,condition,customerReviewAverage,customerReviewCount,description,dollarSavings,features.feature,freeShipping,frequentlyPurchasedWith.sku,image,includedItemList.includedItem,longDescription,manufacturer,name,onlineAvailabilityText,regularPrice,salePrice,shippingCost,shortDescription,sku&pageSize=${pageSize}&page=${currentPage}&sort=${sort}.${order}&format=json`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
