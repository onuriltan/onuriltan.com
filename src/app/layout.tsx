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
import { headers } from "next/headers";

const font = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  display: "swap",
});

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const now = new Date();
  const headersList = await headers();
  const theme = headersList.get("x-theme");

  const isLightTheme = theme === "light";

  const background = isLightTheme ? AppConfig.theme.light.backgroundColor : AppConfig.theme.dark.backgroundColor;
  const foreground = isLightTheme ? AppConfig.theme.light.foregroundColor : AppConfig.theme.dark.foregroundColor;
  const foregroundSecondary = isLightTheme
    ? AppConfig.theme.light.foregroundSecondaryColor
    : AppConfig.theme.dark.foregroundSecondaryColor;
  const foregrounTertiary = isLightTheme
    ? AppConfig.theme.light.foregroundTertiaryColor
    : AppConfig.theme.dark.foregroundTertiaryColor;

  const themeStyle = `
    :root {
      --background-color: ${background};
      --foreground-color: ${foreground};
      --foreground-color-secondary: ${foregroundSecondary};
      --foreground-color-third: ${foregrounTertiary};
      --mode: ${isLightTheme ? "light" : "dark"};
      --hour: ${now.getHours()};
    }
  `;
  return (
    <html lang="en" className={font.className}>
      <ThemeContextProvider>
        <head>
          <title>V. Onur Iltan</title>
          <meta name="description" content="V. Onur Iltan" />
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
}
