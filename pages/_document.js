import { Html, Head, Main, NextScript, title } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Tri2Do</title>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;500&family=Titillium+Web:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/app-icon.png" />
      </Head>
      <body className="light-theme">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
