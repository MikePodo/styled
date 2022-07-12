import { Provider, createClient } from "urql";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Toaster } from "react-hot-toast";

import type { AppProps } from "next/app";

import { StateContext } from "~lib/context";

import GlobalStyles from "~styles/util/GlobalStyles";

import Nav from "~components/Nav";

const url: string = process.env.NEXT_PUBLIC_BACKEND_API!;
const client = createClient({ url });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <GlobalStyles />
          <Toaster />
          <Nav />
          <Component {...pageProps} />
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
