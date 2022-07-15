import Layout from "../../components/layout";
import Posts from "../../components/posts";
import {
  getPostsData,
  getAllPostTags,
  getAllPostCategories,
} from "../../lib/posts";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export async function getStaticPaths() {
  const tags = getAllPostTags();
  return {
    paths: tags,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsData = getPostsData({
    page: 1,
    limit: 10,
    tags: [params.tag],
  });
  const categories = getAllPostCategories();
  return {
    props: {
      tag: params.tag,
      postsData,
      categories,
    },
  };
}

export default function Tag({ tag, postsData, categories, darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <Layout title={tag} categories={categories} darkMode={darkMode}>
      <h1 className="text-4xl font-extrabold mb-8">#{tag}</h1>
      <Posts postsData={postsData} />
    </Layout>
  );
}
