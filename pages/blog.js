import { NextSeo } from "next-seo";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";
import Layout from "../components/layout";
import LinkX from "../components/link-x";
import Posts from "../components/posts";
import data from "../lib/data";
import { getPostsData, getAllPostCategories } from "../lib/posts";

export async function getStaticProps() {
  const postsData = getPostsData({
    page: 1,
    limit: 10,
  });
  const categories = getAllPostCategories();
  return {
    props: {
      postsData,
      categories,
    },
  };
}

export default function Blog({ postsData, categories, darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const member = data.mirbostani;
  const url = `${data.site.url}/blog`;

  return (
    <>
      <NextSeo
        title={t("site_title")}
        description={t("site_description")}
        canonical={url}
        openGraph={{
          type: "website",
          site_name: t("site_name"),
          locale: query && query.lang === "fa" ? "fa_IR" : "en_US",
          url: url,
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
      <Layout categories={categories} darkMode={darkMode}>
        <Posts postsData={postsData} />
      </Layout>
    </>
  );
}
