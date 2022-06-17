import type { AppProps } from "next/app";
import { Provider, createClient } from "urql";

import "../styles/globals.css";

const url: string = process.env.NEXT_PUBLIC_BACKEND_API!;
const client = createClient({ url });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
