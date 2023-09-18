import axios from "axios";

export const getProducts = async (
  categoryID = "",
  page = "1",
  pageSize = "20",
  sort = "manufacturer",
  order = "asc"
) => {
  try {
    const { data } = await axios.get(
      `https://api.bestbuy.com/v1/products((categoryPath.id=${categoryID}))?apiKey=XoOyBvkKSwXerF6urgkvaO4p&sort=color.asc&show=color,condition,customerReviewAverage,customerReviewCount,categoryPath.name,features.feature,freeShipping,image,regularPrice,sku,shortDescription,salePrice,name,longDescription,manufacturer,frequentlyPurchasedWith.sku,description,shippingCost,includedItemList.includedItem,onlineAvailabilityText&pageSize=${pageSize}&page=${page}&sort=${sort}.${order}&format=json`
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const productSearch = async (
  searchValue: string | undefined,
  page = "1",
  pageSize = "100",
  category = ""
) => {
  try {
    const { data } = await axios.get(
      `https://api.bestbuy.com/v1/products((search=${searchValue})${category})?apiKey=XoOyBvkKSwXerF6urgkvaO4p&sort=color.asc&show=color,condition,customerReviewAverage,customerReviewCount,categoryPath.name,features.feature,freeShipping,image,regularPrice,sku,shortDescription,salePrice,name,longDescription,manufacturer,frequentlyPurchasedWith.sku,description,shippingCost,includedItemList.includedItem,onlineAvailabilityText&pageSize=${pageSize}&page=${page}&format=json`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
