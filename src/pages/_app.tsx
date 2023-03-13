import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Vollkorn } from "@next/font/google";

import "@fortawesome/fontawesome-free";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(far, fas, fab);

import "@/styles/globals.scss";

import Header from "@components/header";
import Footer from "@components/footer";
import { ThemeContextProvider } from "@/store/ThemeContext";

const font = Vollkorn({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  const switchIcon = (
    usesDarkMode: boolean,
    favicon: HTMLLinkElement,
    manifest: HTMLLinkElement
  ) => {
    if (!favicon || !manifest) return;

    if (usesDarkMode) {
      favicon.href = "./favicon-dark/favicon.ico";
      manifest.href = "./favicon-dark/site.webmanifest";
    } else {
      favicon.href = "./favicon-light/favicon.ico";
      manifest.href = "./favicon-light/site.webmanifest";
    }
  };

  useEffect(() => {
    const usesDarkMode =
      window.matchMedia("(prefers-color-scheme: dark)").matches || false;
    const favicon = document.getElementById(
      "favicon"
    ) as HTMLLinkElement | null;
    const manifest = document.getElementById(
      "manifest"
    ) as HTMLLinkElement | null;
    if (!favicon || !manifest) {
      alert("There is no favicon or manifest.");
      return;
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        switchIcon(e.matches, favicon, manifest)
      );
    switchIcon(usesDarkMode, favicon, manifest);
  }, []);

  return (
    <ThemeContextProvider>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Onur Iltan</title>
        <meta name="description" content="Onur Iltan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-dark/favicon.ico" id="favicon" />
        <link
          rel="manifest"
          href="/favicon-dark/site.webmanifest"
          id="manifest"
        />
        <script src="/prism.js" async />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeContextProvider>
  );
};

export default App;
