import type { NextPage } from "next";
import { useQuery } from "urql";

import { PRODUCT_QUERY } from "~lib/query";
import { ProductType } from "~types/ProductsType";

import Product from "~components/Product";

const Home: NextPage = () => {
  const [results] = useQuery({ query: PRODUCT_QUERY });

  const { data, fetching, error } = results;

  if (fetching) return <h2>Loading...</h2>;
  if (error) return <h2>An error has occurred: {error.message}</h2>;

  const products = data.products.data;

  return (
    <div>
      {products.map((product: ProductType) => (
        <Product product={product} key={product.attributes.slug} />
      ))}
    </div>
  );
};

export default Home;
