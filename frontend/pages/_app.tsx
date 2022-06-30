import { Provider, createClient } from "urql";

import type { AppProps } from "next/app";

import { StateContext } from "~lib/context";

import "~styles/globals.css";

import Nav from "~components/Nav";

const url: string = process.env.NEXT_PUBLIC_BACKEND_API!;
const client = createClient({ url });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Provider value={client}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  );
}

export default MyApp;
