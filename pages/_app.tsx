import type { AppProps } from "next/app";
import "../styles/styles.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: "Luxurious Roman", cursive;
        }
      `}</style>
    </>
  );
}

export default MyApp;