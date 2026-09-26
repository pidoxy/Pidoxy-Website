import Head from "next/head";
import Script from "next/script";
import { Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Display serif for headings. Only the default axes are loaded — extra axes
// (SOFT/WONK) balloon the font files and hurt LCP.
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${fraunces.variable}`} style={{ fontFamily: "var(--sans)" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#030213" />
      </Head>
      {gaMeasurementId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}');`}
          </Script>
        </>
      )}
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
