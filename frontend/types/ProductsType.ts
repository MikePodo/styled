export interface ProductImage {
  data: {
    attributes: {
      formats: {
        small: {
          url: string;
        };
        medium: {
          url: string;
        };
        large: {
          url: string;
        };
        thumbnail: {
          url: string;
        };
      };
    };
  };
}

export interface ProductType {
  attributes: {
    title: string;
    description: string;
    slug: string;
    price: number;
    image: ProductImage;
  };
}
