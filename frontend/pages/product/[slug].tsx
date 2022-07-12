import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import toast from "react-hot-toast";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import { GET_PRODUCT_QUERY } from "~lib/query";
import { useStateContext } from "~lib/context";

import { ProductImage } from "~types/ProductsType";

import {
  ProductDetailsStyle,
  ProductInfoStyle,
  QuantityStyle,
  BuyStyle,
} from "~styles/pages/product/ProductDetailsStyle";

const ProductDetails = () => {
  //Reset qty
  useEffect(() => {
    setQty(1);
  }, []);

  //Router query
  const { query } = useRouter();

  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;

  //Context state
  const { qty, setQty, increaseQty, decreaseQty, onAddProduct } =
    useStateContext();

  if (fetching) return <h2>Loading...</h2>;
  if (error) return <h2>An error has occurred: {error.message}</h2>;

  //Create toast
  const notify = () => {
    toast.success(`${title} added to your cart`, { duration: 1500 });
  };

  //Extract product data
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
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </QuantityStyle>
        <BuyStyle
          onClick={() => {
            onAddProduct(data.products.data[0].attributes, qty);
            notify();
          }}
        >
          Add to cart
        </BuyStyle>
      </ProductInfoStyle>
    </ProductDetailsStyle>
  );
};

export default ProductDetails;
