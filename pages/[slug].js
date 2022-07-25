import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";
import { getAllPostSlugs, getPostData } from "../lib/posts";
import Layout from "../components/layout";
import Author from "../components/author";
import Markdown from "../components/markdown";
import data from "../lib/data";
import Tags from "../components/tags";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";
import Head from "next/head";
import Headroom from "react-headroom";

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      slug: params.slug,
      postData,
    },
  };
}

export default function Post({ slug, postData, darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const url = `${data.site.url}/${slug}`;
  const authorUrl = `${data.site.url}/about`;

  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const updateTocAnchors = (e) => {
      const headingAnchors = e.target.documentElement.querySelectorAll(
        ".post .article .heading-anchor"
      );
      if (headingAnchors.length === 0) return;
      const activeHeadingAnchors = Array.from(headingAnchors).filter(
        (anchor) => {
          const rect = anchor.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= e.target.documentElement.clientHeight &&
            rect.right <= e.target.documentElement.clientWidth
          );
        }
      );
      if (activeHeadingAnchors.length === 0) return;
      // Deactive all ToC anchors
      const tocAnchors = e.target.documentElement.querySelectorAll(
        ".post .sidebar .toc .toc-anchor"
      );
      if (tocAnchors.length === 0) return;
      Array.from(tocAnchors).forEach((anchor) => {
        anchor.classList.remove("active");
      });
      // Active current ToC anchor
      const tocAnchorId = `toc-${activeHeadingAnchors[0].id}`;
      const activeTocAnchor = e.target.documentElement.querySelector(
        `#${tocAnchorId}`
      );
      if (!activeTocAnchor) return;
      activeTocAnchor.classList.add("active");
    };
    const onScroll = (e) => {
      const currScrollTop = e.target.documentElement.scrollTop;
      // setScrollTop(currScrollTop);
      // updateTocAnchors(e);
      setScrollTop((prevScrollTop, props) => {
        updateTocAnchors(e);
        if (Math.abs(prevScrollTop - currScrollTop) > 200) {
          return currScrollTop;
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <NextSeo
        title={t("site_title")}
        description={t("site_description")}
        canonical={url}
        openGraph={{
          type: "article",
          site_name: t("site_name"),
          locale: query && query.lang === "fa" ? "fa_IR" : "en_US",
          url: url,
          title: postData.title,
          description: postData.description,
          images: [data.site.og.image1],
          article: {
            publishedTime: new Date(postData.date).toISOString(),
            authors: [authorUrl],
            tags: [postData.category, ...postData.tags.split(",")],
          },
        }}
        twitter={{
          handle: data.mirbostani.twitter_handle,
          site: data.mirbostani.twitter_handle,
          cardType: "summary_large_image",
        }}
      />
      <Layout title={postData.title} className="sk-post" darkMode={darkMode}>
        <div className="post">
          <h1 className="title">{postData.title}</h1>
          <p className="description">{postData.description}</p>
          <div className="meta">
            <Author
              // slug={postData.author}
              date={postData.date}
              readTime={postData.readTime}
            />
            {/* <span className="mx-2 text-gray-400">·</span> */}
          </div>
          <div className="tags">
            <Tags category={postData.category} tags={postData.tags} />
          </div>
          <div className="content">
            <aside className="sidebar">
              <div className="toc bg-gray-100 dark:bg-gray-800">
                <h1 className="title text-gray-600 dark:text-gray-300">
                  {t("table_of_contents")}
                </h1>
                {postData.headingAnchors.length > 0 && (
                  <ul className="body">
                    {postData.headingAnchors.map((anchor) => {
                      return (
                        <li
                          id={`toc-${anchor.anchorId}`}
                          key={anchor.anchorId}
                          className={`mx-${anchor.heading[1] - 1} toc-anchor`}
                        >
                          <a href={`#${anchor.anchorId}`}>{anchor.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </aside>
            <article className="article sk-post-content">
              {/* <div dangerouslySetInnerHTML={{__html: postData.contentHtmlWithAnchors}}/> */}
              <Markdown darkMode={darkMode}>
                {postData.contentMarkdown}
              </Markdown>
            </article>
          </div>
        </div>
      </Layout>
    </>
  );
}
