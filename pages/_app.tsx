import "../styles/globals.css";
import type { AppProps } from "next/app";

const MyApp = function run({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default MyApp;
