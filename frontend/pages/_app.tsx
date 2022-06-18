import type { AppProps } from "next/app";
import { Provider, createClient } from "urql";

import "~styles/globals.css";

import Nav from "~components/Nav";

const url: string = process.env.NEXT_PUBLIC_BACKEND_API!;
const client = createClient({ url });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
