import { useState } from "react";
import { DefaultSeo } from "next-seo";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";
import data from "../lib/data";
import GoogleAnalytics from "../components/google-analytics";

import "@fontsource/merriweather"; // Defaults to weight 400.
// import "@fontsource/merriweather/500.css" // Weight 500.
// import "@fontsource/merriweather/900-italic.css" // Italic variant.
// import "tailwindcss/tailwind.css";
import "../styles/global.css";
import "../styles/app.css";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false); // initial dark mode state
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          site_name: t("site_name"),
          locale: query && query.lang === "fa" ? "fa_IR" : "en_US",
          url: data.site.url,
          title: t("site_title"),
          description: t("site_description"),
          images: [data.site.og.image1],
        }}
        twitter={{
          handle: data.mirbostani.twitter_handle,
          site: data.mirbostani.twitter_handle,
          cardType: "summary_large_image",
        }}
      />

      <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />

      <Component
        {...pageProps}
        darkMode={{ data: darkMode, setData: setDarkMode }}
      />
    </>
  );
}
