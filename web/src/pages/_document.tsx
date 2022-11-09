import { Html, Head, NextScript, Main } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-gray-app">
        <Main></Main>
        <NextScript />
      </body> 
    </Html>
  );
}
