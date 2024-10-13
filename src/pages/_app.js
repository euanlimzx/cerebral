import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../components/theme";
import Head from "next/head";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <title>EV.AI</title> {/* Set the title here */}
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
