export interface ProductInfo {
  categoryPath: Array<W>;
  color: string;
  condition: string;
  customerReviewAverage: number;
  customerReviewCount: number;
  description: any;
  dollarSavings: number;
  features: Array<U>;
  freeShipping: boolean;
  frequentlyPurchasedWith: any;
  image: string;
  includedItemList: Array<V>;
  longDescription: string;
  manufacturer: string;
  name: string;
  onlineAvailabilityText: string;
  regularPrice: number;
  salePrice: number;
  shippingCost: number;
  shortDescription: any;
  sku: number;
}

interface U {
  feature: string;
}

interface V {
  includedItem: string;
}

interface W {
  Object: { id: string; name: string };
}

export type Props = {
  productData: ProductInfo[];
};
