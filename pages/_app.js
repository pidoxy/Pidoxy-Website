import Head from "next/head";
import Script from "next/script";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

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

// Labels, dates and statuses. Two weights only; not preloaded because it never
// renders above the fold's largest element.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
  preload: false,
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${fraunces.variable} ${mono.variable}`} style={{ fontFamily: "var(--sans)" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f6f4ef" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0b0b0c" media="(prefers-color-scheme: dark)" />
      </Head>
      {gaMeasurementId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="lazyOnload" />
          <Script id="google-analytics" strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}');`}
          </Script>
        </>
      )}
      {clarityProjectId && (
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script",${JSON.stringify(clarityProjectId)});`}
        </Script>
      )}
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
