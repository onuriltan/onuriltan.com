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
import AppConfig from "@config/index";

const font = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const now = new Date();
  const isBefore6PM = now.getHours() < 18;

  const background = isBefore6PM ? AppConfig.theme.light.backgroundColor : AppConfig.theme.dark.backgroundColor;
  const foreground = isBefore6PM ? AppConfig.theme.light.foregroundColor : AppConfig.theme.dark.foregroundColor;
  const foregroundSecondary = isBefore6PM
    ? AppConfig.theme.light.foregroundSecondaryColor
    : AppConfig.theme.dark.foregroundSecondaryColor;
  const foregrounTertiary = isBefore6PM
    ? AppConfig.theme.light.foregroundTertiaryColor
    : AppConfig.theme.dark.foregroundTertiaryColor;

  const themeStyle = `
    :root {
      --background-color: ${background};
      --foreground-color: ${foreground};
      --foreground-color-secondary: ${foregroundSecondary};
      --foreground-color-third: ${foregrounTertiary}
    }
  `;
  return (
    <html lang="en" className={font.className}>
      <ThemeContextProvider>
        <head>
          <title>Onur Iltan</title>
          <meta name="description" content="Onur Iltan" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon-dark/favicon.ico" id="favicon" />
          <link rel="manifest" href="/favicon-dark/site.webmanifest" id="manifest" />
          <style dangerouslySetInnerHTML={{ __html: themeStyle }} />
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

export default RootLayout;
