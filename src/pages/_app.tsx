import { useCallback, useEffect } from "react";
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

import "@/styles/globals.css";
import Header from "@components/header";
import Footer from "@components/footer";

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

  useEffect(() => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    localStorage.setItem("theme", hour > 18 && hour < 7 ? "light" : "dark");
    const r = document.querySelector(":root") as HTMLElement;
    const currentTheme = localStorage.getItem("theme");
    if (r && currentTheme) {
      if (currentTheme === "dark") {
        localStorage.setItem("theme", "light");
        r.style.setProperty("--background-color", "245, 222, 179");
        r.style.setProperty("--foreground-color", "0, 0, 0");
        r.style.setProperty("--foreground-color-secondary", "128, 0, 128");
      } else {
        localStorage.setItem("theme", "dark");
        r.style.setProperty("--background-color", "36, 52, 71");
        r.style.setProperty("--foreground-color", "255, 255, 255");
        r.style.setProperty("--foreground-color-secondary", "238, 206, 26");
      }
    }
  }, []);

  return (
    <>
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
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
