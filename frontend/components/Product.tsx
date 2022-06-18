import React from "react";

import { ProductType } from "~types/ProductsType";

import { ProductStyle } from "~styles/components/ProductStyle";

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  const { title, price, image } = product.attributes;

  return (
    <ProductStyle>
      <div>
        <img src={image.data.attributes.formats.small.url} alt="" />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductStyle>
  );
};

export default Product;
