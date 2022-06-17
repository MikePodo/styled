import type { NextPage } from "next";
import { useQuery } from "urql";

import { PRODUCT_QUERY } from "~lib/query";

const Home: NextPage = () => {
  const [results] = useQuery({ query: PRODUCT_QUERY });

  const { data, fetching, error } = results;

  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

export default Home;
