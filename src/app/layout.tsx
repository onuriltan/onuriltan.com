import "@/styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Prevent auto-adding CSS — we do it manually
config.autoAddCss = false;
import { Noto_Sans } from "next/font/google";

import "@fortawesome/fontawesome-free";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(far, fas, fab);

import { ThemeContextProvider } from "@/store/ThemeContext";
import AppComponents from "@components/index";
import Script from "next/script";

const font = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  display: "swap",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const switchIcon = (usesDarkMode: boolean, favicon: HTMLLinkElement, manifest: HTMLLinkElement) => {
    if (!favicon || !manifest) return;

    if (usesDarkMode) {
      favicon.href = "/favicon-dark/favicon.ico";
      manifest.href = "/favicon-dark/site.webmanifest";
    } else {
      favicon.href = "/favicon-light/favicon.ico";
      manifest.href = "/favicon-light/site.webmanifest";
    }
  };

  // useEffect(() => {
  //   const usesDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches || false;
  //   const favicon = document.getElementById("favicon") as HTMLLinkElement | null;
  //   const manifest = document.getElementById("manifest") as HTMLLinkElement | null;
  //   if (!favicon || !manifest) {
  //     alert("There is no favicon or manifest.");
  //     return;
  //   }
  //   switchIcon(usesDarkMode, favicon, manifest);
  //   window
  //     .matchMedia("(prefers-color-scheme: dark)")
  //     .addEventListener("change", (e) => switchIcon(e.matches, favicon, manifest));
  // }, []);

  return (
    <html lang="en" className={font.className}>
      <ThemeContextProvider>
        <head>
          <title>Onur Iltan</title>
          <meta name="description" content="Onur Iltan" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon-dark/favicon.ico" id="favicon" />
          <link rel="manifest" href="/favicon-dark/site.webmanifest" id="manifest" />
          <Script src="/prism.js" strategy="afterInteractive" />
        </head>
        <body>
          <AppComponents.Header />
          <main>{children}</main>
          <AppComponents.Footer />
        </body>
      </ThemeContextProvider>
    </html>
  );
};

export default Layout;
