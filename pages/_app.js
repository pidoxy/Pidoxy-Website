import Head from "next/head";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#030213" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
