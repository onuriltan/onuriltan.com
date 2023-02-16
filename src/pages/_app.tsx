import "@fortawesome/fontawesome-free";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(far, fas, fab);

import { useEffect } from "react";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.css";
import Header from "@components/header";

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
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
