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

export default function About({ darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const member = data.mirbostani;
  const url = `${data.site.url}/about`;

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

      <Layout title={t("about")} darkMode={darkMode}>
        <div className="flex flex-col flex-grow lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0">
          <div className="mb-8">
            <ProfileInfo member={member} avatar={false} />
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-4 font-mono">Hello World;</p>
            <p className="mb-4">
              My name is {member.fullname}—a full-stack software developer by
              profession and creator by passion. Here is my blog, in which I
              write about my projects, experience, and interests in different
              areas of computer science, especially software engineering.
            </p>
            <p className="mb-4">
              I love to write code and solve problems through designing systems
              and building software solutions. With an entrepreneurial mindset
              and experience in different fields of software engineering, I
              design and implement scalable mobile and web applications.
            </p>
            <p className="mb-4">
              Fascinated by the potential of machine learning algorithms, I also
              have research and development experience in this field,
              specifically the applications of deep learning in natural language
              processing.
            </p>
            <p className="mb-4">
              You can reach me on Twitter{" "}
              <a href={member.twitter}>{member.twitter_handle}</a>.
            </p>
          </div>
          {/* <div className="mb-8">
            <ProfileInfo member={member} avatar={true} />
          </div> */}
        </div>
      </Layout>
    </>
  );
}
