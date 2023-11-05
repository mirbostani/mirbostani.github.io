import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import data from "../lib/data";
import LinkX from "../components/link-x";
import ProfileInfo from "../components/profile-info";
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
          <div className="mb-8">
            <ProfileInfo member={member} avatar={false} />
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-4 font-mono">Hello World;</p>
            <p className="mb-4">
              My name is {member.fullname}‒a self-motivated software engineer and dedicated researcher. My background is firmly rooted in applying computational methods to complex problems and create efficient solutions within the domains of natural language processing (NLP) and computational linguistics (CL).
            </p>
            <p className="mb-4">
              Throughout my career, I have built a strong foundation in software development, specializing in creating scalable web and mobile applications. Combining these skills has enabled me to create AI-powered solutions that harness the synergy of technology and linguistics, unlocking new possibilities for enhanced language understanding.
            </p>
            {/* <p className="mb-4">
              You can reach me on my Twitter{" "}
              <a href={member.twitter}>{member.twitter_handle}</a>.
            </p> */}
          </div>
        </div>
        <div className="flex flex-col bg-gray-100 dark:bg-gray-800 rounded-lg p-4 pb-6">
          <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-4">
            {t("publications")}
          </h1>
          <ul className="list-disc pl-4">
            <li>
              Yasaman Boreshban, <strong>Seyed Morteza Mirbostani</strong>, Seyedeh Fatemeh Ahmadi, Gita Shojaee, Fatemeh Kamani, Gholamreza Ghassem-Sani, and Seyed Abolghasem Mirroshandel (2023). <em>RobustQA: A Framework for Adversarial Text Generation Analysis on Question Answering Systems.</em> In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP’23 demo), Singapore. (Accepted)
            </li>
            <li className="mt-6">
              <strong>Seyed Morteza Mirbostani</strong>, Yasaman Boreshban, Salam Khalifa, Seyed Abolghasem Mirroshandel, and Owen Rambow (2023). <em>Deep active learning for morphophonological processing.</em> In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (ACL’23), Volume 2, Pages 793–803, Toronto, Canada.
            </li>
            <li className="mt-6">
              Yasaman Boreshban, <strong>Seyed Morteza Mirbostani</strong>, Gholamreza Ghassem-Sani, Seyed Abolghasem Mirroshandel, and Shahin Amiriparian (2023). <em>Improving question answering performance using knowledge distillation and active learning.</em> Engineering Applications of Artificial Intelligence (EAAI), Volume 123, Part A.
            </li>
          </ul>
        </div>
        {/* <div className="flex flex-col bg-gray-100 dark:bg-gray-800 rounded-lg p-4 pb-0">
          <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-4">
            {t("latest_blog_posts")}
          </h1>
          <Posts postsData={postsData} />
        </div> */}
      </Layout>
    </>
  );
}
