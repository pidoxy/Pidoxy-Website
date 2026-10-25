import { Html, Head, Main, NextScript } from "next/document";

// Runs before first paint so the page never flashes the wrong theme, and
// marks JS as available so reveal-on-enter styles only apply when they can
// be undone. Kept tiny and dependency-free on purpose.
const bootScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.dataset.theme=t}catch(e){}})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
