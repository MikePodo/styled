import React from "react";

import { ProductType } from "~types/ProductsType";

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  const { title, price, image } = product.attributes;

  return (
    <div>
      <div>
        <img src={image.data.attributes.formats.small.url} alt="" />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </div>
  );
};

export default Product;
