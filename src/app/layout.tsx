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

// Force dynamic rendering so headers() can be used and the theme is always up to date
const dynamic = "force-dynamic";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const now = new Date();
  const headersList = await headers();
  /*
  Theme is set in middleware using a cookie called `hour`, 
  which the client sets like this:

    const hour = new Date().getHours();
    document.cookie = `hour=${hour}; path=/; max-age=86400`;

  The middleware reads that cookie and sets the `x-theme` header accordingly.
  We read it here from the request headers to apply the appropriate theme.
 */
  const theme = headersList.get("x-theme") ?? "dark";

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
          {/* Dark Theme Icons */}
          <link
            rel="icon"
            href="/favicon-dark/favicon.ico"
            type="image/x-icon"
            media="(prefers-color-scheme: no-preference), (prefers-color-scheme: dark)"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-dark/favicon-16x16.png"
            media="(prefers-color-scheme: no-preference), (prefers-color-scheme: dark)"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-dark/favicon-32x32.png"
            media="(prefers-color-scheme: no-preference), (prefers-color-scheme: dark)"
          />
          <link
            rel="apple-touch-icon"
            href="/favicon-dark/apple-touch-icon.png"
            media="(prefers-color-scheme: no-preference), (prefers-color-scheme: dark)"
          />
          <link
            rel="manifest"
            href="/favicon-dark/site.webmanifest"
            media="(prefers-color-scheme: no-preference), (prefers-color-scheme: dark)"
          />

          {/* Light Theme Icons */}
          <link
            rel="icon"
            href="/favicon-light/favicon.ico"
            type="image/x-icon"
            media="(prefers-color-scheme: light)"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-light/favicon-16x16.png"
            media="(prefers-color-scheme: light)"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-light/favicon-32x32.png"
            media="(prefers-color-scheme: light)"
          />
          <link
            rel="apple-touch-icon"
            href="/favicon-light/apple-touch-icon.png"
            media="(prefers-color-scheme: light)"
          />
          <link rel="manifest" href="/favicon-light/site.webmanifest" media="(prefers-color-scheme: light)" />
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
