export interface T {
    customerReviews: { averageScore: number; count: number };
    descriptions: Object;
    images: { standard: string };
    links: { addToCart: String; product: String; web: String };
    names: { title: String };
    prices: { regular: number; current: number };
    rank: number;
    sku: string;
  }
  
  export interface U{
    sku: string;
    customerReviews: {
      averageScore: number;
      count: number
    },
    descriptions: {short: string},
    images: {
      standard: string;
    },
    names: {
      title: string;
    },
    prices: {
      regular: number;
      current: number;
    },
    links: {
      product: string;
      web: string;
      addToCart: string;
    },
    rank: number;
  }

  export interface UsernameInterface{
    username: string
  }