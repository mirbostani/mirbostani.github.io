import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import data from "../lib/data";
import LinkX from "../components/link-x";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";
import { getPostsData } from "../lib/posts";
import Posts from "../components/posts";

export async function getStaticProps() {
  const postsData = getPostsData({
    page: 1,
    limit: 3,
  });
  return {
    props: {
      postsData,
    },
  };
}

export default function Home({ postsData, darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const member = data.mirbostani;
  const url = `${data.site.url}`;
  return (
    <>
      <NextSeo
        title={t("site_title")}
        description={t("site_description")}
        canonical={url}
        openGraph={{
          type: "profile",
          site_name: t("site_name"),
          locale: query && query.lang === "fa" ? "fa_IR" : "en_US",
          url: url,
          title: t("site_title"),
          description: t("site_description"),
          images: [data.site.og.image1],
          profile: {
            firstName: t("mirbostani_firstname"),
            lastName: t("mirbostani_lastname"),
            // username:
            gender: "male",
          },
        }}
        twitter={{
          handle: data.mirbostani.twitter_handle,
          site: data.mirbostani.twitter_handle,
          cardType: "summary_large_image",
        }}
      />

      <Layout darkMode={darkMode}>
        <div className="flex flex-col flex-grow1 lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0 mb-8">
          <div className="mb-8 lg:mb-0">
            <p className="mb-4 font-mono">Hello World;</p>
            <p className="mb-4">
              My name is{" "}
              <LinkX href={{ pathname: "/about", query: query }}>
                {member.fullname}
              </LinkX>
              —a {member.title_extended}. Here is my personal blog in which I
              write about my projects and interests in computer science and
              engineering.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-gray-100 dark:bg-gray-800 rounded-lg p-4 pb-0">
          <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-4">
            {t("latest_blog_posts")}
          </h1>
          <Posts postsData={postsData} />
        </div>
      </Layout>
    </>
  );
}
