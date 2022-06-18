import React from "react";
import Link from "next/link";

import { ProductType } from "~types/ProductsType";

import { ProductStyle } from "~styles/components/ProductStyle";

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  const { title, price, image, slug } = product.attributes;

  return (
    <ProductStyle>
      <Link href={`/product/${slug}`}>
        <div>
          <img src={image.data.attributes.formats.small.url} alt="" />
        </div>
      </Link>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductStyle>
  );
};

export default Product;
