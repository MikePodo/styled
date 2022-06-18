import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { GET_PRODUCT_QUERY } from "~lib/query";

import { ProductImage } from "~types/ProductsType";

import {
  ProductDetailsStyle,
  ProductInfoStyle,
  QuantityStyle,
  BuyStyle,
} from "~styles/pages/product/ProductDetailsStyle";

const ProductDetails = () => {
  const { query } = useRouter();

  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;

  if (fetching) return <h2>Loading...</h2>;
  if (error) return <h2>An error has occurred: {error.message}</h2>;

  const {
    title,
    description,
    image,
  }: { title: string; description: string; image: ProductImage } =
    data.products.data[0].attributes;

  return (
    <ProductDetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfoStyle>
        <h3>{title}</h3>
        <p>{description}</p>
        <QuantityStyle>
          <span>Quantity</span>
          <button>
            <AiFillMinusCircle />
          </button>
          <p>0</p>
          <button>
            <AiFillPlusCircle />
          </button>
        </QuantityStyle>
        <BuyStyle>Add to cart</BuyStyle>
      </ProductInfoStyle>
    </ProductDetailsStyle>
  );
};

export default ProductDetails;
